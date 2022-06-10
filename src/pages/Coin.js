import React, { useState, useEffect, useContext } from 'react';
import { Navigate, useParams } from "react-router-dom";
import { Box, Chip, Container, Grid, Typography, Button } from '@mui/material';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';

import Loading from '../components/Loading';
import FavoriteButton from '../components/FavoriteButton';
import SocialChips from '../components/SocialChips';
import { CoinsContext } from '../contexts/CoinsContext';
import { formatNum } from '../helpers/coins';
import CoinLinksData from '../sections/CoinLinksData';
import CoinPriceData from '../sections/CoinPriceData';
import News from '../sections/News';

const Coin = () => {
  const { id } = useParams();
  const { currency } = useContext(CoinsContext);

  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    fetch(`/api/cryptocurrency/${id}`)
      .then(response => response.json())
      .then(data => {
        setCoin(data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <Container>
      { loading && (
        <Box sx={{minHeight: 450}} justifyContent="center" display="flex" flexDirection="column" alignItems="center">
          <Loading size="7rem"/>
        </Box>
      ) } 
      { Object.keys(coin).length > 0 && (
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
            <Box my={2} display="flex">
              <Button variant="contained" href={coin.links.repos_url.github[0]} sx={{ mr: 1 }}>
                <CodeIcon /> <Typography component="span" mx={1}>Source code</Typography> <OpenInNewIcon />
              </Button>
              <Button variant="contained" href={coin.links.official_forum_url[0]}>
                <ArticleIcon /> <Typography component="span" mx={1}>Official Forum</Typography> <OpenInNewIcon />
              </Button>
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
      ) }

      { ! loading && Object.keys(coin).length === 0 && (
        <Navigate to="*" />
      ) }
      <News />
    </Container>
  );
}

export default Coin;