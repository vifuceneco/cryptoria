import React, { useState, useEffect } from 'react';
import { Box, Chip, Container, Typography } from '@mui/material';
import { useParams } from "react-router-dom";

import News from '../sections/News';
import Loading from '../components/Loading';

const Coin = () => {
  const { id } = useParams();

  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setCoin({
        id: "bitcoin",
        symbol: "btc",
        name: "Bitcoin",
      });
      setLoading(false);
    }, 80000);
  }, []);

  return (
    <Container>
      { loading || Object.keys(coin).length === 0
        ? (
          <Box sx={{minHeight: 450}} justifyContent="center" display="flex" flexDirection="column" alignItems="center">
            <Loading size="7rem"/>
          </Box>
        ) : (
          <Typography variant="h1">
            {coin.name}
            <Chip sx={{textTransform: 'uppercase'}} label={coin?.symbol.toUpperCase()} size="small" />
          </Typography>
        )
      }
      <News />
    </Container>
  );
}

export default Coin;