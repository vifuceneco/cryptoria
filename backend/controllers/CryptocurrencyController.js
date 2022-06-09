const Cryptocurrency = require("../models/Cryptocurrency");

const getAllCryptocurrencies = async (request, response) => {
  try {
      const cryptocurrencies = await Cryptocurrency.find().limit(20);
      response.send(cryptocurrencies);
  } catch (e) {
      response.status(500).send("Error");
  }
}

const getCryptocurrency = ((request, response) => {
  try {
    const id = request.params.id || null;
    Cryptocurrency.findOne({ id: id }, function(err, crypto) {
      if(err) {
        return response.status(500).send(err);
      }
      if (!crypto) {
        response.status(404).send({});
      }
      response.send(crypto);
    });
  } catch (e) {
    response.status(500).send(e);
  }
});


module.exports = {
  getAllCryptocurrencies,
  getCryptocurrency
}