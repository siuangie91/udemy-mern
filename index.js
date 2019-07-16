const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.get('/other', (req, res) => {
  res.send('yes, other route');
});

// dynamically figure out what port to listen to
const PORT = process.env.PORT || 5000;
app.listen(PORT);
