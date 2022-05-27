import React, { useContext, useState } from 'react';
import { MenuItem, Button, Menu } from "@mui/material";

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { CoinsContext } from '../contexts/CoinsContext';

const CurrencyChanger = () => {
  const { currency, changeCurrency } = useContext(CoinsContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChangeCurrency = ( value ) => {
    if (value) {
      changeCurrency(value);
    }
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClick}>
        {currency}
        {anchorEl
          ? <ArrowDropUpIcon sx={{ mr: -1 }}/>
          : <ArrowDropDownIcon sx={{ mr: -1 }}/>
        }
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={anchorEl ? true : false}
        onClose={() => handleChangeCurrency()}
      >
        <MenuItem onClick={() => handleChangeCurrency('ARS')}>ARS</MenuItem>
        <MenuItem onClick={() => handleChangeCurrency('USD')}>USD</MenuItem>
        <MenuItem onClick={() => handleChangeCurrency('EUR')}>EUR</MenuItem>
      </Menu>
    </>
  );
}

export default CurrencyChanger;