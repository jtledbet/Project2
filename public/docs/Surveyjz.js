// var survey = require("survey-jquery");

Survey.Survey.cssType = "bootstrap";



// fs.readFile("Surveyjz.html", "utf8", function(error, data) {

//     // If the code experiences any errors it will log the error to the console.
//     if (error) {
//       return console.log(error);
//     }

//     // We will then print the contents of data
//     console.log(data);

//     // Then split it by commas (to make it more readable)
//     var dataArr = data.split(",");

//     // We will then re-display the content as an array for later use.
//     console.log(dataArr);

//   });


surveyCreator.text = window.localStorage.getItem("Surveyjz.html") || "";


var surveyJSON = { "pages": [{ "name": "page1", "elements": [{ "type": "text", "name": "question1", "title": "Name:" }, { "type": "dropdown", "name": "question2", "title": "I would rather live in a posh NYC high rise than 100 acres in the country", "choices": [{ "value": "item1", "text": "1 (Strongly Disagree)" }, { "value": "item2", "text": "2" }, { "value": "item3", "text": "3" }, { "value": "item4", "text": "4" }, { "value": "item5", "text": "5 (Strongly Agree)" }] }, { "type": "dropdown", "name": "question3", "title": "Going outside for a run is the morning is the perfect way to start a Saturday!", "choices": [{ "value": "item1", "text": "1 (Strongly Disagree)" }, { "value": "item2", "text": "2" }, { "value": "item3", "text": "3" }, { "value": "item4", "text": "4" }, { "value": "item5", "text": "5 (Strongly Agree)" }] }, { "type": "dropdown", "name": "question4", "title": "I’d rather spend the whole day on the couch binging on Netflix than go for a walk.", "choices": [{ "value": "item1", "text": "1 (Strongly Disagree)" }, { "value": "item2", "text": "2" }, { "value": "item3", "text": "3" }, { "value": "item4", "text": "4" }, { "value": "item5", "text": "5 (Strongly Agree)" }] }, { "type": "dropdown", "name": "question5", "title": "I love meeting new people; I make friends everywhere I go!", "choices": [{ "value": "item1", "text": "1 (Strongly Disagree)" }, { "value": "item2", "text": "2" }, { "value": "item3", "text": "3" }, { "value": "item4", "text": "4" }, { "value": "item5", "text": "5 (Strongly Agree)" }] }, { "type": "dropdown", "name": "question6", "title": "I’d rather go to my same favorite restaurant over trying the new hotspot downtown.", "choices": [{ "value": "item1", "text": "1 (Strongly Disagree)" }, { "value": "item2", "text": "2" }, { "value": "item3", "text": "3" }, { "value": "item4", "text": "4" }, { "value": "item5", "text": "5 (Strongly Agree)" }] }] }] }

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
