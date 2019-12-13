const express = require('express');
const router = express.Router();
const customers = require('../controller/customer.controller.js');

// Create a new Customer
router.post('/', customers.create);
 
// Retrieve all Customer
router.get('/', customers.findAll);

// Retrieve a single Customer by Id
router.get('/:customerId', customers.findById);

// Update a Customer with Id
router.put('/', customers.update);

// Delete a Customer with Id
router.delete('/:customerId', customers.delete);

module.exports = router;