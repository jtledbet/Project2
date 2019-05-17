
var path =  require('path');

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, './index.html'));
    });
    
    app.get('/home', function(req, res) {
        res.render('home');
    });

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    app.get('/survey2', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/docs/Surveyjz.html'));
    });

    app.get('/all', function(req, res) {
        res.render('all')
    });

    app.get('/test', function(req, res) {
        res.render('test');
    });
    
};