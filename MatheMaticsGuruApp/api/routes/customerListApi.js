var express = require('express');
var router = express.Router();
  const customers = require("../controllers/customer.controller.js");

  // Create a new Customer
  router.post("/create", customers.create);

  // Retrieve all Customers
  router.get("/all", customers.findAll);

  // Retrieve a single Customer with customerId
  router.get("/customers/:customerId", customers.findOne);

  // Update a Customer with customerId
  //router.put("/customers/:customerId", customers.update);

  // Delete a Customer with customerId
  //router.delete("/customers/:customerId", customers.delete);

  // Create a new Customer
  //router.delete("/customers", customers.deleteAll);
module.exports = router;
