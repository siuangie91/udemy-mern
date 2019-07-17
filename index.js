const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport'); // just need to run the file, so no need to assign to a var

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app); // import the authRoutes function and call it passing in `app`

// dynamically figure out what port to listen to
const PORT = process.env.PORT || 5000;
app.listen(PORT);
