var express = require('express');
var router = express.Router();
var passport = require('passport');

var generator = require('../pdfGen.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {

  var signUpStrategy = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect : '/error',
    failureFlash : true
  });

  return signUpStrategy(req,res,next);

});

router.post('/login', function (req, res, next) {
    ///login strategy
    var loginStrategy = passport.authenticate('local-login', {
        successRedirect : '/',
        failureRedirect : '/login',
        failureFlash: true
    });

    return loginStrategy(req,res,next);
});

router.post('/forms/make', function (req, res, next) {
    generator.generatePDF(req.body);
});

module.exports = router;
