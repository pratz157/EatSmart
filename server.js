const express = require('express');
const app = express();
//Bodyparser middleware for req,res
app.use(express.json());
 
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists

db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: false }');
    // initialMenu();
  });
 

app.use('/api/customers', require('./app/route/customer.route.js'));
app.use('/api/menu_details', require('./app/route/menu.route.js'));
 
const port =  process.env.PORT || 2400;

// Create a Server
var server = app.listen(port, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port);
})
 

function initialMenu(){
  let menuList = [{"name":"Bread Pakoda", "price":20, "isToday":1, "isAvailable":1},
  {"name":"Boiled Egg", "price":30, "isToday":1, "isAvailable":1},
  {"name":"Plain Dosa", "price":25, "isToday":1, "isAvailable":1},
  {"name":"Veg. Manchurian", "price":35, "isToday":1, "isAvailable":1},
  {"name":"Upma", "price":20, "isToday":1, "isAvailable":1},
  {"name":"Poha", "price":20, "isToday":1, "isAvailable":1},
  {"name":"Roti", "price":5, "isToday":1, "isAvailable":1},
  {"name":"Full Meal", "price":60, "isToday":1, "isAvailable":1},
  {"name":"Tea", "price":10, "isToday":1, "isAvailable":1},
  { "name":"Aloo Paratha", "price":35, "isToday":1, "isAvailable":1},
  { "name":"Uttapam", "price":40, "isToday":1, "isAvailable":1},
  { "name":"Fried Rice", "price":45, "isToday":1, "isAvailable":1},
  { "name":"Veg.Combo", "price":50, "isToday":1, "isAvailable":1}]

  // Init data -> save to MySQL
  const Menu = db.menu_details;
  for (let i = 0; i < menuList.length; i++) { 
    Menu.create(menuList[i]);  
  }
}