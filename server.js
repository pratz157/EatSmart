const express = require('express');
const app = express();
//Bodyparser middleware for req,res
app.use(express.json());
 
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
 
// let customerRouter = require('./app/routes/customer.routes.js');
// app.use('/', customerRouter);
 
// // Create a Server
// let server = app.listen(8080, function () {
 
//   let host = server.address().address
//   let port = server.address().port
 
//   console.log("App listening at http://%s:%s", host, port)
// })


const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
//   initial();
// });

db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: false }');
    // initial();
  });
 
require('./app/route/customer.route.js')(app);
 
const port =  process.env.PORT || 2400;

// Create a Server
var server = app.listen(port, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port);
})
 
function initial(){
 
  let customers = [
    {
      id: 1,
      firstname: "Test",
      lastname: "QA",
      age: 36
    },
    {
      id: 2,
      firstname: "Himali",
      lastname: "Shah",
      age: 24
    },
    {
      id: 3,
      firstname: "Abhishek",
      lastname: "Katiyar",
      age: 24
    },
    {
      id: 4,
      firstname: "Pratik",
      lastname: "Patil",
      age: 24
    }
  ]
 
  // Init data -> save to MySQL
  const Customer = db.customers;
  for (let i = 0; i < customers.length; i++) { 
    Customer.create(customers[i]);  
  }
}