var express = require('express');
var router = express.Router();
var Location = require('../models/locationModel');

/* GET home page. */
router.get('/', authenticateAPI, function(req, res, next) {
	Location.find({}).sort('-createdAt')
		.then(function(locations) {
			res.json({ locations: locations });
		})
		.catch(function(err) {
			return next(err);
		});
});

// SHOW
// return data for a single Location as JSON
router.get('/:id', authenticateAPI, function(req, res, next) {
	Location.findById(req.params.id)
		.then(function(location) {
			if (!location) return next(makeError(res, 'Document not found', 404));
			res.json({ locations: location });
		})
		.catch(function(err) {
			return next(err);
		});
});

// CREATE
router.post('/', authenticateAPI, function(req, res, next) {
	Location.create(req.body)
		.then(function(savedLocation) {
			res.json({ location: savedLocation });
		})
		.catch(function(err) {
			return next(err);
		});
});


module.exports = router;

function authenticateAPI(req, res, next) {
	if(!req.isAuthenticated()) {
		res.redirect(401, "/");
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