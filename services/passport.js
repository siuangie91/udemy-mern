const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  new GoogleStrategy( // will be known as a string value of 'google'
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback' // route user will be sent to after they grant our app permission
    },
    (accessToken, refreshToken, profile, done) => { // callback function
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile:', profile);
    }
  )
);
