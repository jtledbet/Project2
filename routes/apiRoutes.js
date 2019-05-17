// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the pets
  app.get("/api/pets", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Pet.findAll({}).then(function (result) {
      // We have access to the pets as an argument inside of the callback function
      res.json(result);
    });
  });


  app.post("/api/pets/submit", function (req, res) {

    console.log("COMPARE SURVEY SCORES HERE");

    var surveySays = req.body;
    console.log("surveySays: " + JSON.stringify(surveySays, 2));

    var surveyName = req.body.name;
    console.log("surveyName: " + JSON.stringify(surveyName, 2));

    var justScores = surveySays.scores;
    console.log("scores: " + justScores);
    
    // var surveyName = "Jon";
    // var justScores = "12345";

    db.Species.findAll({
      attributes: ['id', 'species', 'img', 'score']
    }).then(function (result) {

      var scoreArray = [];
      var differenceArray = [];
      var differenceMin = 40;
      var bestPet;

      // Output JSON result:
      // res.json(result);

      // Build array of scores from database:
      for (results in result)
        scoreArray.push(result[results].dataValues);

        console.log("scoreArray: ", scoreArray);
      for (index in scoreArray) {
        var thisPet = scoreArray[index];
        console.log("index: ", index);
        console.log("thisPet: ", thisPet);

        var thisDifference = 0;
        var totalDifference = 0;

        console.log("thisPet.score", thisPet.score);

        var thisPetScore = thisPet.score;
        console.log("thisPetScore.length", thisPetScore.length);

        for (score in thisPetScore) {
          console.log ("score: ", score, "thisPet.scores[score]: ", thisPetScore[score]);
          console.log ("thisPetScores[score]: ", thisPetScore[score]);
          
          thisDifference = Math.abs(thisPetScore[score] - justScores[score]);
          console.log("thisDifference: ", thisDifference);
          totalDifference += thisDifference;
          totalDifference = totalDifference + thisDifference;
      }

        differenceArray.push("totalDifference:", totalDifference);
        console.log(differenceArray);

        for (index in differenceArray) {
          console.log("index:", index, "difArIn: ", differenceArray[index]);

          if (differenceArray[index] < differenceMin) {
            console.log("differenceArray[index]: ", differenceArray[index]);
            console.log("differenceMin: ", differenceMin);

            differenceMin = differenceArray[index];
            bestPet = {
              "id": thisPet.id,
              "img": thisPet.img,
              "species": thisPet.species,
            };
          }
        }

        console.log("bestPet: ", bestPet);
      }

      // Respond to query
      var response = (bestPet);
      res.json(response);
    });
  });

  // DELETE route for deleting pets. We can get the id of the pet to be deleted from
  // req.params.id
  app.delete("/api/pets/:id", function (req, res) {
    // We just have to specify which pet we want to destroy with "where"
    db.Pet.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result);
    });

  });

  // PUT route for updating pets. We can get the updated pet data from req.body
  app.put("/api/pets", function (req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Pet.create({
      pet_name: req.body.pet_name,
      species: req.body.species,
      bio: req.body.bio,
      scores: req.body.scores
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (result) {
        res.json(result);
      });
  });

};