import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import Person from '@mui/icons-material/Person';

import { UserContext } from '../contexts/UserContext';
import CurrencyChanger from './CurrencyChanger';
import logo from "../logo.svg";

const Header = () => {
  const {user, logout} = useContext(UserContext);

  return (
    <AppBar position="relative" color="dark" sx={{ mb: 4, zIndex: 20 }}>
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
          {!user && (
            <Link to={'login'}>
              <Typography color="primary.main" fontWeight="bold">
                Sign in
              </Typography>
            </Link>
          )}
          {user && (
            <Typography color="primary.main" fontWeight="bold" display="flex" alignItems="center">
              <Person sx={{mr: 2}} />
              {user?.username || "Usuario"}
            </Typography>
          )}
          <CurrencyChanger />
          {user && (
            <Button color="primary" variant="outlined" fontWeight="bold" onClick={logout}>
              <LogoutOutlined />
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
