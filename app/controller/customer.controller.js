const db = require('../config/db.config.js');
const Customer = db.customers;
 
// Post a Customer
exports.create = (req, res) => {  
  // Save to MySQL database
  let customer = req.body;
  Customer.create(customer).then(result => {    
    // Send created customer to client
    res.json(result);
  });
};
 
// Fetch all Customers
exports.findAll = (req, res) => {
  Customer.findAll().then(customers => {
    // Send all customers to Client
    res.json(customers);
  });
};
 
// Find a Customer by Id
exports.findById = (req, res) => {  

//     sequelize.query("SELECT * FROM `users`", { type: sequelize.QueryTypes.SELECT})
//   .then(users => {
//     // We don't need spread here, since only the results will be returned for select queries
//   })

  Customer.findByPk(req.params.customerId).then(customer => {
    res.json(customer);
  })
  .catch((err)=>{
    res.status(404).json({success:false})
    })
};
 
// Update a Customer
exports.update = (req, res) => {
  let customer = req.body;
  let id = req.body.id;
  Customer.update(customer, 
           { where: {id: id} }
           ).then(() => {
             res.status(200).json({msg:"updated successfully a customer with id = " + id});
           });  
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.customerId;
  Customer.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).json({msg:'deleted successfully a customer with id = ' + id});
  });
};