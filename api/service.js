const axios = require("axios");


/* Define database and external API calls here */

async function predictAccountOwnership(data) {
  let url = `${process.env.FIA_URL || 'http://localhost:8000/predict'}` 
  // return axios.get(url, data)
  return axios.post(url, data)
}

async function getRate(from, to) {
  // let url = `http://apilayer.net/api/live?access_key=${process.env.access_key}`;
  let url = `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=${process.env.CURR_API_KEY}`


  return axios.get(url)
}



module.exports = {
  getRate,
  predictAccountOwnership
}
