var db = require('../models');
var exphbs = require('express-handlebars');
var path =  require('path');

module.exports = function(app) {
    
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });
    
    app.get('/login', function(req, res) {
        res.sendFile(path.join(__dirname + '/login'));
    });

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/survey'));
    });

};