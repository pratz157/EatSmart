const express = require('express');
const router = express.Router();

const menu_details = require('../controller/menu.controller.js');

// Add new Menu Item
router.post('/', menu_details.create);
 
// Retrieve Menu
router.get('/', menu_details.findAll);

// Retrieve a single menu-item by Id
router.get('/:menuItemId', menu_details.findById);

// Update a menu-item with Id
router.put('/', menu_details.update);

// Delete a menu-item with Id
router.delete('/:menuItemId', menu_details.delete);


module.exports = router;