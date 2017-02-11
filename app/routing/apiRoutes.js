var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var data = require('../data/friends.js');

exports.route = app.get("/api/friends", function(req, res){
    res.json(data.surveyResponses);
});

exports.posting = app.post("/api/friends", function (req, res){
    var newSurveyResponse = req.body;
    console.log(newSurveyResponse);
    data.surveyResponses.push(newSurveyResponse);
    res.json(data.newSurveyResponse);
});

