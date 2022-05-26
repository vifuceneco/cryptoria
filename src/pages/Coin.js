import React, { useState, useEffect, useContext } from 'react';
import { Box, Button, Chip, Container, Grid, Typography } from '@mui/material';
import { useParams } from "react-router-dom";

import News from '../sections/News';
import Loading from '../components/Loading';

import { coinGeckoCoin } from '../helpers/mock';
import { CoinsContext } from '../contexts/CoinsContext';

import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';

import MenuButton from '../components/MenuButton';
import FavoriteButton from '../components/FavoriteButton';
import SocialChips from '../components/SocialChips';
import DropDown from '../components/DropDown';
import { formatNum } from '../helpers/coins';
import { Search } from '@mui/icons-material';

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
              <Box>
                <Box my={2} display="flex">
                  <Button color="secondary" variant="contained" href="http://www.google.com" sx={{textTransform: 'none', mr: 2}}>
                    {coin.links.homepage[0]}
                    <OpenInNewIcon fontSize="small" sx={{ml: 1}} />
                  </Button>
                  <DropDown
                    label={
                      <>
                        Explorer
                        <Search sx={{ml: 1}}/>
                      </>
                    }
                    options={coin.links.blockchain_site?.filter(item => item).map(url => {
                      return { name: url, href: url };
                    })}
                  />
                </Box>
                <Button variant="contained" href="http://www.google.com">
                  <CodeIcon /> <Typography component="span" mx={1}>Source code</Typography> <OpenInNewIcon />
                </Button>
                <Button variant="contained" href="http://www.google.com">
                  <ArticleIcon /> <Typography component="span" mx={1}>Whitepaper</Typography> <OpenInNewIcon />
                </Button>
              </Box>
            </Grid>
            <Grid item sm={7}>
            <Typography component='span' variant='h6' mr={2} sx={{opacity: .6}} fontSize="small">
              {coin.name} Price <span style={{textTransform: 'uppercase'}}>({coin.symbol})</span>
            </Typography>
            <Typography component='h2' variant='h3' fontWeight={700}>
              ${formatNum(coin.market_data.current_price[currency.toLowerCase()])} {currency}
            </Typography>
            </Grid>
          </Grid>
        )
      }
      <News />
    </Container>
  );
}

export default Coin;