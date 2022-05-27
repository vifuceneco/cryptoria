import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Chip, Typography } from '@mui/material';

import { getColorByNum } from '../helpers/coins';
import { CoinsContext } from '../contexts/CoinsContext';

const CoinPriceData = ({ name, symbol, percentageChange, currentPrice }) => {
  const { currency } = useContext(CoinsContext);

  return (
    <>
      <Typography component='span' variant='h6' mr={2} sx={{opacity: .6}} fontSize="small">
        {name} Price <span style={{textTransform: 'uppercase'}}>({symbol})</span>
      </Typography>
      <Typography component='h2' variant='h3' fontWeight={700} display="flex" alignItems="center">
        ${currentPrice} {currency}
        <Chip
          sx={{letterSpacing: 1.1, fontSize: '1.2rem', borderRadius: '.25rem', ml: 2, fontWeight: 400}}
          color={getColorByNum(percentageChange)}
          label={`${percentageChange.toFixed(2)}%`}
        />
      </Typography>
    </>
  );
};

CoinPriceData.propTypes = {
  name: PropTypes.string.isRequired,
  percentageChange: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default CoinPriceData;