import React from 'react';
import { AppBar, IconButton, Toolbar, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../logo.svg";
import CurrencyChanger from './CurrencyChanger';

export default function Header() {

  return (
    <AppBar position="static" color="dark" sx={{ mb: 2 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Box display="flex" alignItems="center">
          <img
            src={logo}
            alt="Cryptoria"
            width={50}
            style={{ marginRight: "13px" }}
          />
          <Typography variant="h4" component="h1" color="white">
            Cryptoria
          </Typography>
        </Box>
        <CurrencyChanger />
      </Toolbar>
    </AppBar>
  );
}
