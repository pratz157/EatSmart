const db = require('../config/db.config.js');
const Menu = db.menu_details;
 
// Post a Menu
exports.create = (req, res) => {  
  // Save to MySQL database
  let menuItem = req.body;
  console.log(" * ",JSON.stringify(menuItem));
  Menu.create(menuItem).then(result => {    
    // Send created menuItem to client
    res.json(result);
  });
};
 
// Fetch all Menus
exports.findAll = (req, res) => {
  Menu.findAll().then(menuItems => {
    // Send all menuItems to Client
    res.json(menuItems);
  });
};
 
// Find a Menu by Id
exports.findById = (req, res) => {  

  Menu.findByPk(req.params.menuItemId).then(menuItem => {
    res.json(menuItem);
  })
  .catch((err)=>{
    res.status(404).json({sucess:false})
    })
};
 
// Update a Menu
exports.update = (req, res) => {
  let menuItem = req.body;
  let id = req.body.id;
  Menu.update(menuItem, 
           { where: {id: id} }
           ).then(() => {
             res.status(200).json({msg:"updated successfully a menuItem with id = " + id});
           });  
};
 
// Delete a Menu by Id
exports.delete = (req, res) => {
  const id = req.params.menuItemId;
  Menu.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).json({msg:'deleted successfully a menuItem with id = ' + id});
  });
};