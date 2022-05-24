import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Box, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../logo.svg';

export default function Header() {
    return (
        <AppBar position="static" color="dark">
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                 }}
            >
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon/>
                </IconButton>
                <Box
                    display="flex"
                    alignItems="center"
                >
                        <img
                            src={logo}
                            alt="Cryptoria"
                            width={50}
                            style={{marginRight: '13px'}}
                        />
                        <Typography variant="h4" component="h1" color="white">Cryptoria</Typography>
                </Box>
                <Button
                    color="inherit"
                >
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}