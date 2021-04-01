// Setup empty JS object to act as endpoint for all routes
let projectData = {};
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express ();
/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// Cors for cross origin allowance
const cors = require('cors');
app.use (cors());
// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;
// Spin up the server
// Callback to debug
const server = app.listen(port, listening);
 function listening(){
    console.log(server);
    console.log(`running on localhost: ${port}`);
  };
// Initialize all route with a callback function
app.get('/all', getData )
// Callback function to complete GET '/all'
function getData (req, res){
    res.send(projectData);
}
// Post Route
app.post('/weather', addCode )
function addCode (req, res){
    newEntry ={
        date:req.body.date,
        temp: req.body.temp,
        UR : req.body.UR
    }
  projectData = newEntry;
  res.send(projectData);
  console.log(newEntry);

}