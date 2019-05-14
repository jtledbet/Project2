var pets = require("../models/pets.js");

module.exports = function (app) {
    console.log("api Routes GO!")

    // Display possible pets:
    app.get("/api/pets", function (req, res) {
        console.log("GET SUCCESSFUL!")
        res.json(pets);
    });

    // Incoming survey results:
    app.post("/api/pets", function (req, res) {
        console.log("POSTING!")

        console.log(req.body);

        var surveySays = req.body;
        console.log("surveySays: " + JSON.stringify(surveySays, 2));

        var surveyName = req.body.name;
        console.log("surveyName: " + JSON.stringify(surveyName, 2));

        var justScores = surveySays.scores;
        console.log("scores: " + justScores);


        var differenceArray = [];
        var differenceMin = 40;
        var bestPet;

        for (pet in pets) {
            var thisPet = pets[pet];
            console.log(thisPet);

            var thisDifference;
            var totalDifference = 0;

            for (score in thisPet.scores) {
                thisDifference = Math.abs(thisPet.scores[score] - justScores[score])
                totalDifference += thisDifference;
                totalDifferene = totalDifference + thisDifference;
            }

            differenceArray.push(totalDifference);

            for (index in differenceArray) {
                console.log("index:", index, "difArIn: ", differenceArray[index]) 

                if (differenceArray[index] < differenceMin) {
                    differenceMin = differenceArray[index];
                    bestPet = {
                        "name": thisPet.name,
                        "photo": thisPet.photo
                    };
                }
            }
    
            console.log("bestPet: " + bestPet.name)
        }

        // Add new user
        pets.push(surveySays);

        // Respond to query
        var response = (bestPet);
        res.json(response);

    });
}