const cors = require("cors");
const express = require("express");
const debug = require('debug')('app:server');
const logger = require("morgan");
const helmet = require("helmet");


const errorHandler = require("./utils/errorHandler");
const api = require("./api");

const app = express();
const port = parseInt(process.env.PORT) || 4000;
const isDevEnv = process.env.NODE_ENV !== 'production'


// Middlewares for production env.
app.use(helmet());
app.use(cors());

if (isDevEnv) {
  app.use(logger('dev'));
} else {
  app.use(logger('combined'));
}

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


// Sub-apps and routes
app.use('/api', api);
// app.use('/v1', api);
// app.use('/api/v1', api);

app.get('*', (req, res) => {
  res.json({ message: 'Welcome to Owl Direction!!!' });
  // res.redirect('/');
});

// Default error handler
app.use(errorHandler);

// Start app server
app.listen(port, () => {
  // debug(`Api server running on port ${port}.`);
  debug(`Server running on port ${port}.`);
});
