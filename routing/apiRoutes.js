var db = require('../models');
var express = require('express');
var app = express();
var router = express.Router();
var exphbs = require('express-handlebars');
var moment = require('moment-timezone');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;

// Import the model (pet.js) to use its database functions.
var Pet = require("../models/pet.js");
var User = require("../models/user.js")

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');


router.get('/login', function (req, res) {
    res.render(res);
});

router.post('/signup', function (req, res) {
    db.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(function (result) {
        res.json(result);
    });
});

router.get('/pets', function (req, res) {
    db.Pet.findAll({}).then(function (result) {
        res.render('index', result);
    });
});

router.get('/survey', function (req, res) {
    db.Pet.findAll({}).then(function (result) {
        res.render('index', result);
    });
});

// // Display possible pets:
// app.get("/api/pets", function (req, res) {
//     Pet.findAll(function (data) {
//         var hbsObject = {
//             pet: data
//         };
//         res.json(hbsObject);
//         console.log("OBJECT: ", hbsObject);
//         res.render("index", hbsObject);
//     });
// });

// // Incoming survey results:
// app.post("/api/pets", function (req, res) {
//     console.log("POSTING!")

//     console.log(req.body);

//     var surveySays = req.body;
//     console.log("surveySays: " + JSON.stringify(surveySays, 2));

//     var surveyName = req.body.pet_name;
//     console.log("surveyName: " + JSON.stringify(surveyName, 2));

//     var justScores = surveySays.scores;
//     console.log("scores: " + justScores);

//     pets = hbsObject;

//     var differenceArray = [];
//     var differenceMin = 40;
//     var bestPet;

//     for (pet in pets) {
//         var thisPet = pets[pet];
//         console.log(thisPet);

//         var thisDifference;
//         var totalDifference = 0;

//         for (score in thisPet.scores) {
//             thisDifference = Math.abs(thisPet.scores[score] - justScores[score])
//             totalDifference += thisDifference;
//             totalDifferene = totalDifference + thisDifference;
//         }

//         differenceArray.push(totalDifference);

//         for (index in differenceArray) {
//             console.log("index:", index, "difArIn: ", differenceArray[index])

//             if (differenceArray[index] < differenceMin) {
//                 differenceMin = differenceArray[index];
//                 bestPet = {
//                     "name": thisPet.pet_name,
//                     "photo": thisPet.photo
//                 };
//             }
//         }

//         console.log("bestPet: " + bestPet.pet_name)
//     }

//     // Respond to query
//     var response = (bestPet);
//     res.json(response);

// });
// }