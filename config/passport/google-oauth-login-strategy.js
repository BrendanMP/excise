// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// var User = require('../../models/userModel');
// var GoogleCreds = require('./passport_secrets');
//
// var strategy = new GoogleStrategy({
// 		clientID: GoogleCreds.googleClientId,
// 		clientSecret: GoogleCreds.googleClientSecret,
// 		callbackURL: GoogleCreds.googleCallBackURL
// 	},
// 	function(token, refreshToken, profile, done) {
// 		console.log(profile);
// 		// make the code asynchronous
// 		// User.findOne won't fire until we have all our data back from Google
// 		process.nextTick(function () {
//
// 			// try to find the user based on their google id
// 			User.findOne({'google.id': profile.id}, function (err, user) {
// 				if (err)
// 					return done(err);
//
// 				if (user) {
//
// 					// if a user is found, log them in
// 					return done(null, user);
// 				} else {
// 					// if the user isnt in our database, create a new user
// 					var newUser = new User();
//
// 					// set all of the relevant information
// 					newUser.google.id = profile.id;
// 					newUser.google.token = token;
// 					newUser.google.name = profile.displayName;
// 					newUser.google.email = profile.emails[0].value; // pull the first email
//					newUser.google.image = profile._json.image.url;
//
// 					// save the user
// 					newUser.save(function (err) {
// 						if (err)
// 							throw err;
// 						return done(null, newUser);
// 					});
// 				}
// 			});
// 		})
// 	}
// );
//
// module.exports = strategy;
//
//
//
