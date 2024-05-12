const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
    /*
    #swagger.tags["Laptops"];
    */

  const result = await mongodb
    .getDb("Cluster1")
    .db("project2")
    .collection("laptops")
    .find();
  result.toArray().then((laptops) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(laptops);
  });
};

const getSingle = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid laptop id to find the laptop.");
  }
  /*
    #swagger.tags["Laptops"];
    */
  const laptopId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb("Cluster1")
    .db("project2")
    .collection("laptops")
    .find({ _id: laptopId });
  result.toArray().then((laptops) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(laptops[0]);
  });
};

const addLaptop = async (req, res) => {
  /*
    #swagger.tags["Laptops"];
    */
  const laptop = {
    modelName: req.body.modelName,
    brand: req.body.brand,
    processor: req.body.processor,
    screenSize: req.body.screenSize,
    batteryLife: req.body.batteryLife,
    installedRAM: req.body.installedRAM,
    driveCapacity: req.body.driveCapacity,
    driveType: req.body.driveType,
    price: req.body.price
  };
  const response = await mongodb
    .getDb("Cluster1")
    .db("project2")
    .collection("laptops")
    .insertOne(laptop);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "Some error ocurred while adding new laptop.");
  }
};

const updateLaptop = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res
      .status(400)
      .json("Must use a valid laptop id to update the laptop details.");
  }
  /*
    #swagger.tags["Laptops"];
    */
  const laptopId = new ObjectId(req.params.id);
  const laptop = {
    modelName: req.body.modelName,
    brand: req.body.brand,
    processor: req.body.processor,
    screenSize: req.body.screenSize,
    batteryLife: req.body.batteryLife,
    installedRAM: req.body.installedRAM,
    driveCapacity: req.body.driveCapacity,
    driveType: req.body.driveType,
    price: req.body.price,
  };
  const response = await mongodb
    .getDb("Cluster1")
    .db("project2")
    .collection("laptops")
    .replaceOne({ _id: laptopId }, laptop);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error ||
          "Some error ocurred while updating the laptop details."
      );
  }
};

const deleteLaptop = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid laptop id to delete a laptop.");
  }
  /*
    #swagger.tags["Laptops"];
    */
  const laptopId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb("Cluster1")
    .db("project2")
    .collection("laptops")
    .deleteOne({ _id: laptopId });

  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error ||
          "Some error occurred while removing the laptop details."
      );
  }
};

module.exports = {
  getAll,
  getSingle,
  addLaptop,
  updateLaptop,
  deleteLaptop
};
