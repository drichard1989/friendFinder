const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Here, we are going to set up the express app. 
const app = express();
const PORT = process.env.PORT || 3000;

// Here, we are going to set up the Express Atpp to handle data parsing. 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// Here, we are going to save some data in an object. 

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

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});
