const express = require('express');
const router = express.Router();

const emp = require('../controller/emp.controller.js');

// Add User
router.post('/', emp.create);
 
// Retrieve User
router.get('/:empId', emp.findById);

router.post('/validate',emp.validateUser);

// router.get('/', emp.findAll);


module.exports = router