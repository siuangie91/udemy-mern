const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // create the User model instance

// define a function and pass to serializeUser
passport.serializeUser((user, done) => {
  done(null, user.id); // `user.id` is the entry id in the db
});

passport.use(
  new GoogleStrategy( // will be known as a string value of 'google'
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback' // route user will be sent to after they grant our app permission
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('*********************');
      console.log(profile.id, profile.emails[0].value);

      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // user already exists
          done(null, existingUser); // no error, user record
        } else {
          // create new user model instance
          new User({ googleId: profile.id })
            .save() // save model instance to db
            .then(user => done(null, user));
        }
      });
    }
  )
);
