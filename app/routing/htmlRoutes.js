var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();


// Here, we are creating a get request for the survey page so that the survey page is loaded on localhost:3000/survey
exports.survey = app.get("/survey", function (req, res){
    res.sendFile(path.join(__dirname + "/../public", "survey.html"));
});

// Here, we are creating a get request for the page so that the home page is loaded on localhost:3000/
exports.home = app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public", "home.html"));
});



