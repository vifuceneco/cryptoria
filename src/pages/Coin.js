import React, { useState, useEffect } from 'react';
import { Box, Button, Chip, Container, Typography } from '@mui/material';
import { useParams } from "react-router-dom";

import News from '../sections/News';
import Loading from '../components/Loading';

import { coinGeckoCoin } from '../helpers/mock';
import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';

import MenuButton from '../components/MenuButton';

const Coin = () => {
  const { id } = useParams();

  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setCoin({
        id: coinGeckoCoin.id,
        symbol: coinGeckoCoin.symbol,
        name: coinGeckoCoin.name,
        logo: coinGeckoCoin.image.small,
        rank: coinGeckoCoin.market_cap_rank,
        description: coinGeckoCoin.description.en,
        explorer: coinGeckoCoin.blockchain_site
      });
      setLoading(false);
    }, 0);
  }, []);

  return (
    <Container>
      { loading || Object.keys(coin).length === 0
        ? (
          <Box sx={{minHeight: 450}} justifyContent="center" display="flex" flexDirection="column" alignItems="center">
            <Loading size="7rem"/>
          </Box>
        ) : (
          <Box>
            <Box sx={{ display: 'flex' }}>
              <img src={coin.logo} alt={coin.name}/>
              <Typography component='h1' variant='h2'>{coin.name}</Typography>
              <Chip sx={{textTransform: 'uppercase'}} label={coin?.symbol.toUpperCase()} size="small" />
            </Box>
            <Box>
              <Chip label={`Rank #${coin.rank}`}></Chip>
            </Box>
            <Box>
              <Button variant="contained" href="http://www.google.com">
                <LinkIcon />
                bitcoin.org
                <OpenInNewIcon />
              </Button>
              <MenuButton label={coinGeckoCoin.name} options={coinGeckoCoin.explorer} />
              <Button variant="contained" href="http://www.google.com">
                <CodeIcon />
                Source code
                <OpenInNewIcon />
              </Button>
              <Button variant="contained" href="http://www.google.com">
                <ArticleIcon />
                Whitepaper
                <OpenInNewIcon />
              </Button>
            </Box>
          </Box>
        )
      }
      <News />
    </Container>
  );
}

export default Coin;