const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
  new GoogleStrategy( // will be known as a string value of 'google'
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback' // route user will be sent to after they grant our app permission
    },
    accessToken => { // callback function
      console.log(accessToken);
    }
  )
);

// when user gets to this route, kick them into the passport flow
app.get(
  '/auth/google/',
  passport.authenticate('google', {
    scope: ['profile', 'email'] // specifies to google what type of access we want from the user's info
  })
);

// pass the `code` query param provided by google
app.get('/auth/google/callback', passport.authenticate('google'));

// dynamically figure out what port to listen to
const PORT = process.env.PORT || 5000;
app.listen(PORT);
