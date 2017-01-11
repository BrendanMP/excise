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

router.post('/login', function (req, res, next) {

    var loginStrategy = passport.authenticate('local-login', {
        successRedirect : '/',
        failureRedirect : '/login',
        failureFlash: true
    });

    return loginStrategy(req,res,next);
});

router.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});

router.get('/user', authenticate, function(req, res, next) {
	var data = {
		// id: req.user._id,
		// email: req.user.local.email,
		//password: req.user.local.password
		user: req.user
	};
	res.send(data);
});

module.exports = router;

function authenticate(req, res, next) {
	if(!req.isAuthenticated()) {
		req.flash('error', 'Oops! You are not logged in. Please sign up or login to continue.');
		res.redirect('/');
	}
	else {
		next();
	}
}