var express = require('express');
var router = express.Router();
var User = require('../models/userModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}).sort('-createdAt')
      .then(function(users) {
        res.json({ users: users });
      })
      .catch(function(err) {
        return next(err);
      });
});

// SHOW
// return data for a single Location as JSON
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id)
      .then(function(user) {
        if (!user) return next(makeError(res, 'Document not found', 404));
        res.json({ users: user });
      })
      .catch(function(err) {
        return next(err);
      });
});

//CREATE
router.post('/', function(req, res, next) {
  User.create(req.body)
      .then(function(savedUser) {
        res.json({ user: savedUser });
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