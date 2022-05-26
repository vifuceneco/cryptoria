import React, { useContext } from 'react';
import { Box, Chip, Container, Grid, Icon, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import News from '../sections/News';
import CryptoCards from '../sections/CryptoCards';
import { CoinsContext } from '../contexts/CoinsContext';
import { addCurrencySymbol, getArrowIconByNum, formatNum, getColorByNum } from '../helpers/coins';

const tableColumns = (currency) => [
  {
    field: "name", 
    headerName: "Name",
    flex: 1,
    renderCell: ({ value, row }) => {
      return (
        <>
          <Typography color="secondary" componenet="span" style={{marginRight: '.5rem'}}>
            #{row.market_cap_rank}
          </Typography>
          <img src={row.image} alt={value} width="20" style={{marginRight: '.5rem'}} />
          <Typography fontWeight="bold" component="span" style={{marginRight: '.5rem'}}>
            {value}
          </Typography>
          <Typography color="gray" fontWeight="bold" fontSize="small" component="span">
            {row.symbol.toUpperCase()}
          </Typography>
        </>
      );
    }
  },
  {
    field: "current_price", 
    headerName: "Current Price", 
    valueGetter: ({ value }) => addCurrencySymbol(formatNum(value)),
    width: 120,
    minWidth: 120,
  },
  {
    field: "price_change_percentage_24h", 
    headerName: "24h %",
    renderCell: ({ value }) => (
      <Typography color={getColorByNum(value)} display="flex" alignItems="center">
        {getArrowIconByNum(value)} {formatNum(value)}%
      </Typography>
    ),
    width: 120,
    minWidth: 120,
  },
  {
    field: "market_cap", 
    headerName: "Market Cap", 
    valueGetter: ({ value }) => addCurrencySymbol(formatNum(value)),
    flex: 1,
  },
  {
    field: "circulating_supply", 
    headerName: "Circulating Supply",
    valueGetter: ({ value }) => addCurrencySymbol(formatNum(value)),
    flex: 1,
  },
];

const Home = () => {
  const { coins, loading, currency} = useContext(CoinsContext);

  return (
    <Container>
      <News />
      <CryptoCards />
      <Box mb={3}>
        <Typography variant="h5" fontWeight="bold" component="h2">
          Cryptorias's Cryptocurrency Prices by Market Cap
        </Typography>
      </Box>
      <div
        style={{width: "100%"}}>
          <DataGrid
            disableSelectionOnClick
            autoHeight
            loading={loading}
            columns={tableColumns(currency)}
            rows={coins}
            pageSize={5}
          />
        </div>
    </Container>
  );
}

export default Home;