var express = require("express");
var db = require("./models");
var app = express();
var exphbs = require('express-handlebars');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var Strategy = require('passport-local').Strategy;
require('./config/passport')(app);
// var {ensureAuthenticated} = require('./config/auth');


// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/htmlRoutes.js")(app);


app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({secret: 'keyboard cat'}));

app.use(passport.initialize());
app.use(passport.session());

app.use((routes, req, res, next) => {
  console.error(routes);
  res.render('routes', {
    user: req.user,
    error
  });
});

app.use((error, req, res, next) => {
    console.error(error);
    res.render('error', {
      user: req.user,
      error
    });
  });

app.post('/login', passport.authenticate('local', 
{successRedirect: '/index', failureRedirect: '/login', failureFlash: true }
));

var PORT = process.env.PORT || 3030;

db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port: ", PORT);
    });
});