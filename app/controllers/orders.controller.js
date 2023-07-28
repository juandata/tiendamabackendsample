const db = require("../models");
const Order = db.orders;

// Create and Save a new Order
exports.create = (req, res) => {
  console.log("orders endpoint triggered");
  // Validate request
  if (req.body.length === 0) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create an Order
  const order = new Order(req.body);

  // Save Order in the database
  order
    .save(order)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Order.",
      });
    });
};

// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
  Order.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
