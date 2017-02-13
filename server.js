
// Creating our variables to incorporate the express, body-parser, and path node packages. 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

// Here, we are going to set up the express app. 
var app = express();

// This gives us access to the folders here for static applications.
app.use(express.static(__dirname + "/app/public"));

// We are declaring the port number 3000
var PORT = process.env.PORT || 3000;

// Here, we are going to set up the Express App to handle data parsing. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// Here, we are going to save some data in an object. We are creating an array of objects, with the numerical data being saved as an arra of strings inside the instantiated object.
app.use("/", htmlRoutes.home);
app.use("/", htmlRoutes.survey);
app.use("/", apiRoutes.posting);
app.use("/", apiRoutes.route);

// Here, we are creating a listening method so that the express server is listening on the PORT variable, which is 3000
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});