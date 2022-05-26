import React from 'react';
import { Grid, Typography } from '@mui/material';

import AutoGraphIcon from '@mui/icons-material/AutoGraphRounded';
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import ListCard from '../components/ListCard';
import { trendingCoins, worstCoins, perfCoins } from '../helpers/mock';

const CryptoCards = ({}) => {
  return (
    <>
      <Typography variant="h4" component="h3" color="secondary">Real Time Ranking</Typography>
      <Grid container spacing={2} mt={2} mb={5}>
        <Grid item xs={12} sm={4}>
          <ListCard title="Trending" Icon={WhatshotRoundedIcon} list={trendingCoins}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ListCard title="Top Performants" Icon={AutoGraphIcon} list={perfCoins}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ListCard title="Worst Performants" Icon={KeyboardDoubleArrowDownIcon} list={worstCoins}/>
        </Grid>
      </Grid>
    </>
  );
}

export default CryptoCards;