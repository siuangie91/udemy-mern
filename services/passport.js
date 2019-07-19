const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // create the User model instance

// define a function and pass to serializeUser
passport.serializeUser((user, done) => {
  done(null, user.id); // `user.id` is the entry id in the db
});

passport.deserializeUser((id, done) => {
  // turns the id back into a user
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy( // will be known as a string value of 'google'
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback', // route user will be sent to after they grant our app permission
      proxy: true // allow proxy
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // user already exists
        done(null, existingUser); // no error, user record
      } else {
        // create new user model instance
        const user = await new User({ googleId: profile.id }).save(); // save model instance to db
        done(null, user);
      }
    }
  )
);
