var express = require('express');
var router = express.Router();
var User = require('../models/userModel');

// router.use('/', function(req, res, next) {
//     if(!req.user){
//         res.redirect('/');
//     }
//     next();
// })

router.get('/auth', authenticateAPI, function(req, res, next) {
    var data = req.user;
    res.send(data);
});

/* GET users listing. */
router.get('/', authenticateAPI, function(req, res, next) {
  User.find({}).sort('-createdAt')
      .then(function(users) {
        res.json({ users: users });
      })
      .catch(function(err) {
        return next(err);
      });
});

// SHOW
router.get('/:id', authenticateAPI, function(req, res, next) {
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
router.post('/', authenticateAPI, function(req, res, next) {
  User.create(req.body)
      .then(function(savedUser) {
        res.json({ user: savedUser });
      })
      .catch(function(err) {
        return next(err);
      });
});

module.exports = router;

function authenticateAPI(req, res, next) {
    if(!req.isAuthenticated()) {
        res.redirect(401, '/');
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