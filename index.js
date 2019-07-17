const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

// dynamically figure out what port to listen to
const PORT = process.env.PORT || 5000;
app.listen(PORT);
