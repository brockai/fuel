const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

function verifyApiKey(req, res, next) {
  let apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).send('No API key provided.');
  }

  if (apiKey !== process.env.API_KEY) {
    return res.status(401).send('Invalid API key.');
  }

  next();
}

module.exports = verifyApiKey;
