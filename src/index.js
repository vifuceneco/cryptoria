import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';

import App from './App';
import CoinsProvider from './contexts/CoinsContext';
import UserProvider from './contexts/UserContext';
import theme from './helpers/theme';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CoinsProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CoinsProvider>
  </ThemeProvider>
);
