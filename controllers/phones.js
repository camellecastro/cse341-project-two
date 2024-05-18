const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

// Get All Smartphones
const getAll = async (req, res) => {
    /*
        #swagger.tags["Smartphones"];
    */
    const result = await mongodb
        .getDb("Cluster1")
        .db("project2")
        .collection("smartphones")
        .find();
    result.toArray().then((phones) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(phones);
    });
};

// Get Single Smartphone by ID from database
const getSingle = async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    /*
    #swagger.tags["Phones"];
    */
    const phoneId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb("Cluster1")
      .db("project2")
      .collection("smartphones")
      .find({ _id: phoneId });
    try {
      result.toArray().then((phones) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(phones[0]);
      });
    } catch (err) {
      res.status(400).json({ message: err });
    }
  } else {
    res.status(400).json("Must use a valid phone id to find the phone.");
  }
  
};

// create/post a new smartphone
const addPhone = async (req, res) => {
  //#swagger.tags["Phones"];
  const phone = {
    model: req.body.model,
    brand: req.body.brand,
    screenSize: req.body.screenSize,
    capacity: req.body.capacity,
    chip: req.body.chip,
    backCamera: req.body.backCamera,
    frontCamera: req.body.frontCamera,
    price: req.body.price,
  };
  const response = await mongodb
    .getDb("Cluster1")
    .db("project2")
    .collection("smartphones")
    .insertOne(phone);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "Some error ocurred while adding new phone.");
  }
};

// update existing smartphone by ID
const updatePhone = async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    //#swagger.tags["Phones"];
    const phoneId = new ObjectId(req.params.id);

    const phone = {
      model: req.body.model,
      brand: req.body.brand,
      screenSize: req.body.screenSize,
      capacity: req.body.capacity,
      chip: req.body.chip,
      backCamera: req.body.backCamera,
      frontCamera: req.body.frontCamera,
      price: req.body.price,
    };

    const response = await mongodb
      .getDb("Cluster1")
      .db("project2")
      .collection("smartphones")
      .replaceOne({ _id: phoneId }, phone);

    if (response.modifiedCount > 0) {
      res.status(204).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error ||
          "Some error ocurred while updating the smartphone details."
        );
    }
  } else {
    res
      .status(400)
      .json("Must use a valid phone id to update the phone details.");
  }
};

// delete smartphone by ID
const deletePhone = async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    //#swagger.tags["Contacts"];
    const phoneId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb("Cluster1")
      .db("project2")
      .collection("smartphones")
      .deleteOne({ _id: phoneId });

    if (response.deletedCount > 0) {
      res.status(204).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error ||
          "Some error occurred while removing the smartphone details."
        );
    }
  } else {
    res.status(400).json("Must use a valid contact id to delete a contact.");
  }
};

module.exports = {
  getAll,
  getSingle,
  addPhone,
  updatePhone,
  deletePhone,
};
