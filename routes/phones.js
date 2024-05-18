const express = require("express");
const routes = express.Router();

const phonesController = require("../controllers/phones");
const validation = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/authenticate")

routes.get("/", phonesController.getAll);
routes.get("/:id", phonesController.getSingle);
routes.post("/",
    isAuthenticated,
    validation.addPhone,
    phonesController.addPhone);
routes.put(
  "/:id",
  isAuthenticated,
  validation.addPhone,
  phonesController.updatePhone
);
routes.delete("/:id", isAuthenticated, phonesController.deletePhone);

module.exports = routes;
