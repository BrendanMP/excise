var express = require('express');
var router = express.Router();
var Form = require('../models/generatedFormModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Form.find({}).sort('-createdAt')
		.then(function(forms) {
			res.json({ forms: forms });
		})
		.catch(function(err) {
			return next(err);
		});
});

module.exports = router;


function makeError(res, message, status) {
	res.statusCode = status;
	var error = new Error(message);
	error.status = status;
	return error;
}