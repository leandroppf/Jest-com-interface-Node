const routes = require("express").Router();
const RenderViewController = require("./app/controllers/RenderViewController");
const ArithmeticController = require("./app/controllers/ArithmeticController");

routes.get("/", RenderViewController.renderPage);
routes.get("/sum", ArithmeticController.sum);
routes.get("/subtract", ArithmeticController.subtract);
routes.get("/multiply", ArithmeticController.multiply);
routes.get("/divide", ArithmeticController.divide);
routes.get("/imc", ArithmeticController.imc);

module.exports = routes;
