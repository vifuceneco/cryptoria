import React from 'react';
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import logo from "../logo.svg";
import CurrencyChanger from './CurrencyChanger';
import { Link } from 'react-router-dom';

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
          <Box display="flex" alignItems="center" color="white">
            <img
              src={logo}
              alt="Cryptoria"
              width={50}
              style={{ marginRight: "13px" }}
              />
            <Typography variant="h4" component="h1" color="common.white">
              Cryptoria
            </Typography>
          </Box>
        </Link>
        <CurrencyChanger />
      </Toolbar>
    </AppBar>
  );
}
