var express = require("express");

var router = express.Router();

// Import the model (pet.js) to use its database functions.
var pet = require("../models/pet.js");
var user = require("../models/user.js")

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  pet.all(function(data) {
    var hbsObject = {
      pets: data
    };
    console.log("OBJECT: ", hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/survey", function(req, res) {
  pet.all(function(data) {
    var hbsObject = {
      pets: data
    };
    console.log("OBJECT: ", hbsObject);
    res.render("survey", hbsObject);
  });
});

router.get("/api/pets", function(req, res) {
  pet.all(function(data) {
    var hbsObject = {
      pets: data
    };
    console.log("OBJECT: ", hbsObject);
    res.render("allpets", hbsObject);
  });
});

router.post("/api/pets", function(req, res) {
  pet.create([
    "pet_name", "species", "bio", "scores"
  ], [
    req.body.pet_name, req.body.species, "empty bio", req.body.scores
  ], function(result) {
    // Send back the ID of the new pet
    res.json({ id: result.insertId });
  });
});

router.put("/api/pets/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  console.log("affected: ", req.body.affected);

  pet.update({
    affected: req.body.affected
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/pets/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  pet.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
