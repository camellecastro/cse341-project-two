const express = require("express");
const routes = express.Router();

const phonesController = require("../controllers/phones");
const validation = require("../middleware/validate");

routes.get("/", phonesController.getAll);
routes.get("/:id", phonesController.getSingle);
routes.post("/", validation.addPhone, phonesController.addPhone);
routes.put("/:id", validation.addPhone, phonesController.updatePhone);
routes.delete("/:id", phonesController.deletePhone);

module.exports = routes;
