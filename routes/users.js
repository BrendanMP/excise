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






module.exports = router;


function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}