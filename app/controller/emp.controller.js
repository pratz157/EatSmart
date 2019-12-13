const db = require('../config/db.config.js');
const Employees = db.employee_details;
 
// Post a Employees
exports.create = (req, res) => {  
  // Save to MySQL database
  let emp = req.body;
  Employees.create(emp).then(result => {    
    // Send created emp to client
    
    res.json(result);
  })
  .catch((err)=>{
    res.status(404).json({success:false})
    });
};
 
// Fetch all Employeess
// exports.findAll = (req, res) => {
//   Employees.findAll().then(emps => {
//     // Send all emps to Client
//     res.json(emps);
//   })
//   .catch((err)=>{
//     res.status(404).json({
//         success:false,
//         msg:"Error retrieving Data"
//     })
//   });
// };
 
// Find a Employees by Id
exports.findById = (req, res) => {  

//     sequelize.query("SELECT * FROM `users`", { type: sequelize.QueryTypes.SELECT})
//   .then(users => {
//     // We don't need spread here, since only the results will be returned for select queries
//   })

  Employees.findByPk(req.params.empId).then(emp => {
    res.json(emp);
  })
  .catch((err)=>{
    res.status(404).json({success:false})
    })
};

//Auth
exports.validateUser = (req,res) =>{

    Employees.findOne({ where: {empMail: req.body.empMail,empPassword: req.body.empPassword} }).then(emp => {
        console.log(" --> \n", emp)
        if(emp != null){
            res.json({authorised:true});
        }
        else{
            res.json({authorised:false});
        }
        
    })
    .catch((err)=>{
        res.status(404).json({success:false})
    })
}


// Update a Employees
exports.update = (req, res) => {
  let emp = req.body;
  let id = req.body.id;
  Employees.update(emp, 
           { where: {id: id} }
           ).then(() => {
             res.status(200).json({msg:"updated successfully a emp with id = " + id});
           });  
};
 
// Delete a Employees by Id
exports.delete = (req, res) => {
  const id = req.params.empId;
  Employees.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).json({msg:'deleted successfully a emp with id = ' + id});
  });
};