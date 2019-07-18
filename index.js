const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); // just need to run the file, so no need to assign to a var

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey] // to encrypt cookie
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // import the authRoutes function and call it passing in `app`

// dynamically figure out what port to listen to
const PORT = process.env.PORT || 5000;
app.listen(PORT);
