const validator = require("../helpers/validate");
const addLaptop = (req, res, next) => {
    const validationRule = {
        "modelName": "required|string",
        "brand": "required|string",
        "processor": "required|string",
        "screenSize": "required|string",
        "batteryLife": "string",
        "installedRAM": "required|string",
        "driveCapacity": "required|string",
        "driveType": "required|string",
        "price": "required|integer"
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
};

const addPhone = (req, res, next) => {
  const validationRule = {
    "model": "required|string",
    "brand": "required|string",
    "screenSize": "required|string",
    "capacity": "required|string",
    "chip": "required|string",
    "backCamera": "required|string",
    "frontCamera": "required|string",
    "price": "required|integer"
    }
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
};

module.exports = {
    addLaptop,
    addPhone
};
