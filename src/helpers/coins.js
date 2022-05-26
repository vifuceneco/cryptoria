import React from 'react'; 

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const formatNum = (num) => {
  num = num.toLocaleString();
  if (num === "-0") {
    return "0";
  }
  return num;
};

export const addCurrencySymbol = (value, symbol = "$") => `${symbol} ${value}`;

export const getColorByNum = (num) => num < 0 ? "error" : (num > 0 ? 'primary' : 'secondary');

export const getArrowIconByNum = (num) => {
  if (num < 0) {
    return <ArrowDropDownIcon fontSize="inherit" />
  }
  return <ArrowDropUpIcon fontSize="inherit" />;
};