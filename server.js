const express = require('express');
const request = require('request');

const errorHandler = require("./utils/errorHandler");

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});



app.get('/currencies', (req, res) => {
  request(
    { url: `http://apilayer.net/api/live?access_key=${process.env.access_key}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

// Default error handler
app.use(errorHandler);

// Start app server
app.listen(port, () => {
  // debug(`Api server running on port ${port}.`);
  debug(`Server running on port ${port}.`);
});
