const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// dynamically figure out what port to listen to
const PORT = process.env.PORT || 5000;
app.listen(PORT);
