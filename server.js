var express = require("express");
var db = require("./models");

// var exphbs = require('express-handlebars');
// var passport = require('passport');
// var cookieParser = require('cookie-parser');
// var session = require('express-session');
// require('./config/passport')(app);
// var {ensureAuthenticated} = require('./config/auth');

// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Routes
// =============================================================
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);
// app.use("/", require("./routes/htmlRoutes"));



// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
