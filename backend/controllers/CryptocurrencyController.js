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
        return response.status(404).send({});
      }
      response.send(crypto);
    });
  } catch (e) {
    response.status(500).send(e);
  }
});

const createCryptocurrency = ((request, response) => {
  try {
    const data = request.body;
    Cryptocurrency.findOne({ id: data.id }, function(err, crypto) {
      if(err) {
        return response.send({
          error: true, 
          message: "Something wrong happend"
        });
      }

      if (!data.id || !data.symbol || !data.name) {
        return response.send({
          error: true,
          message: "Missing fields",
        });
      }
      if (!crypto) {
        const newCrypto = new Cryptocurrency({
          id: data.id,
          symbol: data.symbol,
          name: data.name,
          description: {
            en: data.description
          },
          market_data: {
            current_price: {
              ars: data.price_ars,
              eur: data.price_eur,
              usd: data.price_usd,
            },
            market_cap_rank: data.market_cap_rank,
          },
          community_data: {
            subreddit_url: data.subreddit_url,
            twitter_followers: data.twitter_followers,
            reddit_subscribers: data.reddit_subscribers,
          },
          links: {
            homepage: [data.homepage],
            official_forum_url: [data.official_forum_url]
          },
          user_id: data.user_id,
        });
        newCrypto.save();
        return response.send(newCrypto);
      } else {
        return response.send({
          error: true,
          message: 'ID for crypto already exists',
        })
      }
    });
  } catch (e) {
    response.send({
      error: true,
      message: e,
    });
  }
});


module.exports = {
  createCryptocurrency,
  getAllCryptocurrencies,
  getCryptocurrency
}