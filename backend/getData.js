const axios = require('axios');
const mongoose = require('mongoose');
const CryptocurrencyModel = require('./models/Cryptocurrency')
const coinUrl = "https://api.coingecko.com/api/v3/coins/";
require('dotenv').config();
const ATLAS_USER = process.env.ATLAS_USER || '';
const ATLAS_PASS = process.env.ATLAS_PASS || '';

mongoose
  .connect("mongodb+srv://" + ATLAS_USER + ":" + ATLAS_PASS + "@ayi-cluster.jhcut.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB Atlas with user: " + ATLAS_USER)
  });

const getCoin = (id = "") => {
  axios({
    method: 'GET',
    url: coinUrl + id,
  })
    .then(res => {
      const data = res.data;
      CryptocurrencyModel.create(data);
    });
}

// const coins = ["bitcoin", "ethereum", "tether", "usd-coin", "binancecoin", "cardano", "ripple", "binance-usd", "solana", "dogecoin", "polkadot", "wrapped-bitcoin", "tron", "staked-ether", "avalanche-2", "dai", "shiba-inu", "leo-token", "crypto-com-chain", "litecoin", "matic-network", "chainlink", "ftx-token", "near", "stellar", "chain-2", "monero", "bitcoin-cash", "okb", "ethereum-classic", "algorand", "cosmos", "flow", "uniswap", "vechain", "tezos", "theta-fuel", "hedera-hashgraph", "apecoin", "the-sandbox", "axie-infinity", "kucoin-shares", "internet-computer", "filecoin", "frax", "decentraland", "elrond-erd-2", "compound-ether", "theta-token", "aave"];

// coins.forEach(coin => getCoin(coin));
