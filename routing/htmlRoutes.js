
var path = require('path');

module.exports = function(app) {
	console.log("html Routes GO!");

	// Home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public', 'index.html'));
	});

	// Survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, 'survey.html'));
    });
	
	// Any unfound page
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'error.html'));
    });
};