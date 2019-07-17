const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // create the User model instance

passport.use(
  new GoogleStrategy( // will be known as a string value of 'google'
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback' // route user will be sent to after they grant our app permission
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleId: profile.id }).save(); // save model instance to db
    }
  )
);
