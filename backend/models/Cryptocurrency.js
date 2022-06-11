const mongoose = require("mongoose");

const CryptocurrencySchema = new mongoose.Schema({
  id: {
    required: true,
    type: String
  },
  symbol: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    en: String,
    es: String,
  },
  image: {
    thumb: String,
    small: String,
    large: String,
  },
  country_origin: String,
  genesis_date: String,
  sentiment_votes_up_percentage: Number,
  sentiment_votes_down_percentage: Number,
  market_cap_rank: Number,
  links: {
    homepage: [String],
    blockchain_site: [String],
    official_forum_url: [String],
    subreddit_url: String,
    repos_url: {
      github: [String],
      bitbucket: [String],
    }
  },
  market_data: {
    current_price: {
      ars: Number,
      btc: Number,
      eur: Number,
      usd: Number,
    },
    market_cap: {
      ars: Number,
      btc: Number,
      eur: Number,
      usd: Number,
    },
    market_cap_rank: Number,
    price_change_percentage_24h: Number,
    circulating_supply: Number,
  },
  community_data: {
    facebook_likes: Number,
    twitter_followers: Number,
    reddit_average_posts_48h: Number,
    reddit_average_comments_48h: Number,
    reddit_subscribers: Number,
    reddit_accounts_active_48h: Number,
    telegram_channel_user_count: Number
  },
  user_id: String,
}, {
  timestamps : true
});

const CryptocurrencyModel = mongoose.model("Cryptocurrency", CryptocurrencySchema);

module.exports = CryptocurrencyModel;