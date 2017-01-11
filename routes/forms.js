var express = require('express');
var router = express.Router();
var Form = require('../models/generatedFormModel');

/* GET users listing. */
router.get('/', authenticateAPI, function(req, res, next) {
	Form.find({}).sort('-createdAt')
		.then(function(forms) {
			res.json({ forms: forms });
		})
		.catch(function(err) {
			return next(err);
		});
});

// SHOW
// return data for a single Location as JSON
router.get('/:id', authenticateAPI, function(req, res, next) {
	Form.findById(req.params.id)
		.then(function(form) {
			if (!form) return next(makeError(res, 'Document not found', 404));
			res.json({ forms: form });
		})
		.catch(function(err) {
			return next(err);
		});
});

//CREATE
router.post('/', authenticateAPI, function(req, res, next) {
	Form.create(req.body)
		.then(function(savedForm) {
			res.json({ forms: savedForm });
		})
		.catch(function(err) {
			return next(err);
		});
});

module.exports = router;

function authenticateAPI(req, res, next) {
	if(!req.isAuthenticated()) {
		res.redirect(401,'/');
	}
	else {
		next();
	}
}

function makeError(res, message, status) {
	res.statusCode = status;
	var error = new Error(message);
	error.status = status;
	return error;
}