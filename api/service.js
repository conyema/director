const axios = require("axios");


/* Define database and external API calls here */

async function predictAccountOwnership(data) {
  let url = "https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=475f6f7a16e450e3d49a"

  // return axios.get(url, data)
  return 434
}

async function getRate(to_from) {
  // let url = `http://apilayer.net/api/live?access_key=${process.env.access_key}`;
  // let url = `https://free.currconv.com/api/v7/convert?q=${}&compact=ultra&apiKey=${process.env.access_key}`


  // return axios.get(url)
  return 434
}



module.exports = {
  getRate,
  predictAccountOwnership
}
