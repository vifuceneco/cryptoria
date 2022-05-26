import React, { useContext } from 'react';
import { InputLabel, Select, FormControl, MenuItem } from "@mui/material";
import { CoinsContext } from '../contexts/CoinsContext';

const CurrencyChanger = () => {

  const { currency, changeCurrency } = useContext(CoinsContext);

  const handleChangeCurrency = ( e ) => {
    changeCurrency(e.target.value);
  }

  return (
    <Select
      color='primary'
      labelId="currencyLabel"
      id="currencySelect"
      value={currency}
      label="Currency"
      onChange={handleChangeCurrency}
    >
      <MenuItem value='ARS'>ARS</MenuItem>
      <MenuItem value='USD'>USD</MenuItem>
      <MenuItem value='EUR'>EUR</MenuItem>
    </Select>
  );
}

export default CurrencyChanger;