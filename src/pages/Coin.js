import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Box, Chip, Container, Grid, Typography } from '@mui/material';


import { formatNum } from '../helpers/coins';
import Loading from '../components/Loading';
import FavoriteButton from '../components/FavoriteButton';
import SocialChips from '../components/SocialChips';
import { CoinsContext } from '../contexts/CoinsContext';
import CoinPriceData from '../sections/CoinPriceData';
import News from '../sections/News';
import CoinLinksData from '../sections/CoinLinksData';

const Coin = () => {
  const { id } = useParams();
  const { currency } = useContext(CoinsContext);

  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(response => response.json())
      .then(data => {
        setCoin(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container>
      { loading || Object.keys(coin).length === 0
        ? (
          <Box sx={{minHeight: 450}} justifyContent="center" display="flex" flexDirection="column" alignItems="center">
            <Loading size="7rem"/>
          </Box>
        ) : (
          <Grid container spacing={4} mb={5}>
            <Grid item sm={5}>
              <Box sx={{ display: 'flex', alignItems: 'center' }} mb={1}>
                <img src={coin.image.small} alt={coin.name} style={{marginRight: '1rem'}} />
                <Typography component='h1' variant='h3' mr={2}>{coin.name}</Typography>
                <Chip sx={{textTransform: 'uppercase'}} label={coin?.symbol.toUpperCase()} size="large" />
                <FavoriteButton />
              </Box>
              <Box mb={2}>
                <Chip color="secondary" label={`Rank #${coin.market_cap_rank}`} sx={{mr: 1}}/>
                <SocialChips
                  reddit={{
                    link: coin.links.subreddit_url,
                    count: coin.community_data.reddit_subscribers
                  }}
                  twitter={{
                    link: `https://twitter.com/${coin.links.twitter_screen_name}`,
                    count: coin.community_data.twitter_followers
                  }}
                  facebook={{
                    link: `https://facebook.com/${coin.links.facebook_username}`,
                    count: coin.community_data.facebook_likes
                  }}
                />
              </Box>
              <Box my={2} display="flex">
                <CoinLinksData
                  homepage={coin.links.homepage[0]}
                  explorerLinks={coin.links.blockchain_site?.filter(item => item).map(url => {
                    return { name: url, href: url };
                  })}
                />
              </Box>
            </Grid>
            <Grid item sm={7}>
              <CoinPriceData
                name={coin.name}
                symbol={coin.symbol}
                currentPrice={formatNum(coin.market_data.current_price[currency.toLowerCase()])} 
                percentageChange={coin.market_data.price_change_percentage_24h}
              />
              <Box my={2}>
                <Typography
                  fontSize="large"
                  lineHeight={1.6}
                  dangerouslySetInnerHTML={{__html: `${coin.description.en.substring(0, 470)}...`}} 
                />
              </Box>
            </Grid>
          </Grid>
        )
      }
      <News />
    </Container>
  );
}

export default Coin;