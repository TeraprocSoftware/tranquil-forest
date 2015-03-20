var passport = require('passport'),
    mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy,
    User = mongoose.model('User');

module.exports = function() {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            console.log('---- passport: ', username);

            // Call Teraproc API to login user

            User.findOne({username: username}).exec(function(err, user) {
                console.log('---- findOne: ', username);
                if(user && user.authenticate(password)) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            })
        }
    ));

// For persistent login session

    passport.serializeUser(function(user, done) {
        if(user) {
            done(null, user._id);
        }
    })

    passport.deserializeUser(function(id, done) {
        User.findOne({_id:id}).exec(function(err, user) {
            if(user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })

    })
}

