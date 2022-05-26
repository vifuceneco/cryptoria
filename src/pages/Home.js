import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


import { coinsData } from '../helpers/mock';
import News from '../sections/News';
import CryptoCards from '../sections/CryptoCards';

const tableColumns = [
  {field: "#", headerName: "#"},
  {field: "Name", headerName: "Name"},
  {field: "Sign", headerName: "Sign"},
  {field: "Price", headerName: "Price"},
  {field: "24h %", headerName: "24h %"},
  {field: "7d %", headerNme: "7d %"},
  {field: "Market Cap", headerName: "Market Cap"},
  {field: "Volume(24h)", headerName: "Volume(24h)"},
  {field: "Circulating Supply", headerName: "Circulating Supply"},
];

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setCoins(coinsData);
    }, 2000);
  }, []);

  return (
    <Container>
      <News />
      <CryptoCards />
      <Box mb={3}>
        <Typography variant="h5" fontWeight="bold" component="h2">
          Cryptorias's Cryptocurrency Prices by Market Cap
        </Typography>
      </Box>
      <DataGrid autoHeight loading={loading} columns={tableColumns} rows={coins} />
    </Container>
  );
}

export default Home;