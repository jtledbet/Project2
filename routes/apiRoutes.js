// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/pets", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Pet.findAll({}).then(function(result) {
      // We have access to the todos as an argument inside of the callback function
      res.json(result);
    });
  });

  // POST route for saving a new todo
  app.post("/api/pets", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Pet.create({
      pet_name: req.body.text,
      species: req.body.complete,
      bio: req.body.bio,
      scores: req.body.scores
    }).then(function(result) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(result);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/pets/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Pet.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/pets", function(req, res) {
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
    }).then(function(result) {
      res.json(result);
    });
  });

};