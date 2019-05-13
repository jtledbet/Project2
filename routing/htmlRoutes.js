// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.


var path = require('path');

module.exports = function(app) {
	console.log("html Routes GO!");

	// Home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
	
	// Any unfound page
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/error.html'));
    });
};