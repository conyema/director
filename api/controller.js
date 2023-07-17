// const createError = require("http-errors");
const debug = require("debug")("app:apis");


const service = require("./service");


async function getCurrencies(req, res, next) {
  // const dataInput = req.body;

  try {
    const result = await service.getRate();

    res.status(200);
    return res.json(result);

  } catch (err) {
    debug(err);
    next(err);
  }
}


async function predictAccountOwnership(req, res, next) {
  const dataInput = req.body;

  try {
    const result = await service.predictAccountOwnership(dataInput);

    res.status(200);
    return res.json(result);

  } catch (err) {
    debug(err);
    next(err);
  }
}



module.exports = {
  getCurrencies,
  predictAccountOwnership
};
