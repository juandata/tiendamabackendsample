module.exports = (app) => {
  const orders = require("../controllers/orders.controller.js");

  var router = require("express").Router();

  // Create a new Order
  router.post("/", orders.create);

  // Retrieve all Orders
  router.get("/", orders.findAll);
  app.use("/api/orders", router);
};
