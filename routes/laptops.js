const express = require("express");
const routes = express.Router();

const laptopsController = require("../controllers/laptops");
const validation = require("../middleware/validate");

routes.get("/", laptopsController.getAll);
routes.get("/:id", laptopsController.getSingle);
routes.post("/", validation.addLaptop , laptopsController.addLaptop);
routes.put("/:id", validation.addLaptop, laptopsController.updateLaptop);
routes.delete("/:id", laptopsController.deleteLaptop);

module.exports = routes;
