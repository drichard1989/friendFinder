
// Creating our variables to incorporate the express, body-parser, and path node packages. 
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Here, we are going to set up the express app. 
const app = express();
const PORT = process.env.PORT || 3000;

// Here, we are going to set up the Express App to handle data parsing. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// Here, we are going to save some data in an object. We are creating an array of objects, with the numerical data being saved as an arra of strings inside the instantiated object.
var surveyResponses = [{
    "name": "Dylan",
    "photoURL": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBS_vTwOeBZaUsZ3pPDpNmVREXJZGvCDvHDwZn4E0s1E83SKnsbQ",
    "scores": [
        "5", 
        "3", 
        "2", 
        "4", 
        "5", 
        "4",
        "3",
        "1", 
        "4", 
        "2"
    ]

}]
// Here, we are creating a get request for the page so that the home page is loaded on localhost:3000/
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
// Here, we are creating a get request for the survey page so that the survey page is loaded on localhost:3000/survey
app.get("/survey", function (req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});
// Here, we are creating a listening method so that the express server is listening on the PORT variable, which is 3000
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});
