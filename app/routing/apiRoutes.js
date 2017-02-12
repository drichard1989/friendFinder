'use strict';
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


    //Here, we are going to create the loops that compare the new survey taker to the survey takers in the database. 
    var difference = 0;
    var bestMatch = 0;

    // Now, we are going to loop through the first survey taker's score to set the benchmark for a low score.
    for (var j = 0; j < data.surveyResponses[0].score.length; j++){

        console.log("Difference: " + difference);
        console.log("BestMatch: " + bestMatch);
        
        // Here, we are going to call the variable difference, and set the difference to the past difference total plus the new difference.We are also going to use the abs method to make the value an absolute value to get a correct value.
        difference += Math.abs(parseInt(newSurveyResponse.score[j] - data.surveyResponses[0].score[j]));
    }

    // Now, we are going to loop through the rest of the survey responses to see if any of them have a lower score. If they have a better score, they are a better match.
    for(var i = 1; i < data.surveyResponses.length; i++){
        var sum = 0;
        console.log("Best Match: " + bestMatch);
        for (var j = 0; j < data.surveyResponses[i].score.length; j++){
            sum += Math.abs(parseInt(newSurveyResponse.score[j]) - data.surveyResponses[i].score[j]);
            console.log("Sum: " + sum);
        }

        // Now, if the sum of the difference between the two objects scores is lower than the current score, then assign the sum to lowScore.
        if (difference > sum) {
            difference = sum;
            bestMatch = i;
        }
    }



    // We waited to add the newSurveyResponse to the object, because if it was added at the beginning, it would have found itself as a perfect match. 
    data.surveyResponses.push(newSurveyResponse);

    console.log(data.surveyResponses[bestMatch])

    res.send(data.surveyResponses[bestMatch]);
    

});



