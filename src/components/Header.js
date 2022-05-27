import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography } from "@mui/material";

import CurrencyChanger from './CurrencyChanger';
import logo from "../logo.svg";

export default function Header() {
  return (
    <AppBar position="relative" color="dark" sx={{ mb: 2, zIndex: 20 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to={'/'} color="white">
          <Box display="flex" alignItems="center">
            <img
              src={logo}
              alt="Cryptoria"
              width={50}
              style={{ marginRight: "1rem" }}
              />
            <Typography variant="h4" component="h1" color="common.white" mr={3}>
              Cryptoria
            </Typography>
          </Box>
        </Link>
        <Box display="flex" columnGap={3} alignItems="center">
          <Link to={'about'}>
            <Typography color="primary.main">About</Typography>
          </Link>
          <Link to={'contact'}>
            <Typography color="primary.main">Contact</Typography>
          </Link>
          <CurrencyChanger />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
