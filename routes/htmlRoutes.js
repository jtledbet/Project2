
var path =  require('path');

module.exports = function(app) {
    console.log("static dir: ", __dirname);

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index'));
    });
    
    app.get('/login', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/login'));
    });

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey'));
    });

    app.get('/all', function(req, res) {
        console.log("this is running")
        res.sendFile(path.join(__dirname, '../public/viewAll.html'));
    });

};

// const express = require("express")
// const router = express.Router()


// router.get("/", function(req,res){
//     console.log("root route running")
//     res.sendFile("/index")
// })

// router.get("/all", function(req,res){
//     console.log("root route running")
//     res.sendFile("/viewAll")
// })

// module.exports = router