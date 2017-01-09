var express = require('express');
var router = express.Router();
var Location = require('../models/locationModel');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

module.exports = router;


function makeError(res, message, status) {
	res.statusCode = status;
	var error = new Error(message);
	error.status = status;
	return error;
}