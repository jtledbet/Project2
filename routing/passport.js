var session = require('express-session');
var cookieparser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var db = require('../shared/models');


module.exports = (app) => {
    app.use(cookieparser());
    app.use(session)
}