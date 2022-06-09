const Cryptocurrency = require("../models/Cryptocurrency");

const getAllCryptocurrencies = async (request, response) => {
  try {
      const vsCurrency = request.query.vs_currency.toLowerCase() || 'usd';
      let cryptocurrencies = await Cryptocurrency.find().sort('market_cap_rank');
      cryptocurrencies = cryptocurrencies.map(crypto => {
        return {
          id: crypto.id,
          name: crypto.name,
          symbol: crypto.symbol,
          market_cap_rank: crypto.market_cap_rank,
          current_price: crypto.market_data.current_price[vsCurrency],
          price_change_percentage_24h: crypto.market_data.price_change_percentage_24h,
          market_cap: crypto.market_data.market_cap[vsCurrency],
          circulating_supply: crypto.market_data.circulating_supply,
          image: crypto.image.small,
        }
      });

      response.send(cryptocurrencies);
  } catch (e) {
      console.log(e);
      response.status(500).send(e);
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