	/* variables */
var model = require('./model');


	/* methods */
// return the ejs templates with the apropiate data
exports.index = function(request, response) {
	response.render('login', {username : 'login'});
};

exports.login = function(request, response) {
	response.render('login', {username : 'login'});
};

exports.home = function(request, response) {
	response.render('home', {username : 'home'})
};

exports.example = function(request, response) {
	response.render('example', {})
};