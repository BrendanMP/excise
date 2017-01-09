var express = require('express');
var router = express.Router();
var passport = require('passport');

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

module.exports = router;
