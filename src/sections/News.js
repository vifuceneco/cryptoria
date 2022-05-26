import React from 'react';
import { Grid, Typography } from '@mui/material';

import NewsCard from '../components/NewsCard';

const News = ({}) => {
  return (
    <>
      <Typography variant="h4" component="h3" color="secondary">Crypto News</Typography>
      <Grid container spacing={2} mt={1} mb={5}>
        <Grid item xs={12} md={3}>
          <NewsCard 
            image='/assets/news/news_4.jpg' 
            description='Crypto Deep Dive' 
            title='What is Yield Farming?'
            href="https://www.youtube.com/embed/XgXL_X3bH70?autoplay=1&mute=0&…0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <NewsCard 
            image='/assets/news/news_2.jpg' 
            description='Crypto News' 
            title='Terra Relaunches'
            href="https://coinmarketcap.com/alexandria/article/coinmarketcap-n…y-25-you-ve-stolen-everything-from-me-investor-tells-do-kwon"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <NewsCard 
            image='/assets/news/news_3.jpg' 
            description='The Capital' 
            title='Global CoinMarketCap Conference!'
            href="https://conference.coinmarketcap.com/"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <NewsCard 
            image='/assets/news/news_1.png' 
            description='Learn & Earn' 
            title='Learn About "TRON" & Earn $TRX!'
            href="https://coinmarketcap.com/earn/project/tron"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default News;