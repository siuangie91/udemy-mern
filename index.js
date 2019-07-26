const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); // just need to run the file, so no need to assign to a var

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
// middlewares for passport and cookie
app.use(
  /*
  For cookieSession, the cookie IS the session. Passport takes the user id, 
  finds the user, and sets it on the request object as `session`
  */
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey] // to encrypt cookie
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // import the authRoutes function and call it passing in `app`
require('./routes/billingRoutes')(app);

// config so that in prod, express knows to use react router routes when applicable
if (process.env.NODE_ENV === 'production') {
  // express serves up prod assets (e.g., main.js, main.css)
  app.use(express.static('client/build'));

  // express serves up index.html file if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// dynamically figure out what port to listen to
const PORT = process.env.PORT || 5000;
app.listen(PORT);
