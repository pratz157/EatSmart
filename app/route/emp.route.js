const express = require('express');
const router = express.Router();

const emp = require('../controller/emp.controller.js');

// Add User
router.post('/', emp.create);
 
// Retrieve User
router.get('/:menuItemId', emp.findById);

module.exports = router