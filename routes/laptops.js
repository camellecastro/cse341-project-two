const express = require("express");
const routes = express.Router();

const laptopsController = require("../controllers/laptops");
const validation = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/authenticate");


routes.get("/", laptopsController.getAll);
routes.get("/:id", laptopsController.getSingle);
routes.post(
    "/",
    isAuthenticated,
    validation.addLaptop,
    laptopsController.addLaptop
);
routes.put(
    "/:id",
    isAuthenticated,
    validation.addLaptop,
    laptopsController.updateLaptop
);
routes.delete("/:id", isAuthenticated,laptopsController.deleteLaptop);

module.exports = routes;
