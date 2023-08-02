const express = require('express');


const api = express();
// const router = express.Router();

// Get route logic
const { getCurrencies, predictAccountOwnership } = require('./controller');


// API routes
// api.get('/currencies/:from-:to', getCurrencies);
api.get('/currencies', getCurrencies);

api.post('/account_prediction', predictAccountOwnership)
// router.post('/account_prediction', predictAccountOwnership)



module.exports = api;
