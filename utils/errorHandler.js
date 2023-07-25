module.exports = (err, req, res, next) => {
  // res.sendStatus(err.status || 500);
  res.status(err.status || 500);
  res.json({
    status: 'error',
    // error: err.message
    message: err.status ? err.message : 'Request not successful. Check for errors and try again later'
    // message: 'Request not successful. Check for errors and try again'
  });
};
