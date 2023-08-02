const createError = require("http-errors");
const debug = require("debug")("app:apis");


const service = require("./service");


async function getCurrencies(req, res, next) {
  // const { from, to } = req.params;
  const { from, to } = req.query;
  const noCurrency = from === undefined && to === undefined

  try {
    // Reject if request does not contain a rate
    if (noCurrency) {
      return next(createError(400, 'Please include currencies for the rate you require'));
    }

    const { data } = await service.getRate(from, to);

    res.status(200);
    return res.json({ data });

  } catch (err) {
    debug(err);
    next(err);
  }
}


async function predictAccountOwnership(req, res, next) {
  const dataInput = req.body;

  try {
    // const result = await service.predictAccountOwnership(dataInput);
    const { data } = await service.predictAccountOwnership(dataInput);

    res.status(200);
    // return res.json(result);
    return res.json(data);

  } catch (err) {
    debug(err);
    next(err);
  }
}



module.exports = {
  getCurrencies,
  predictAccountOwnership
};
