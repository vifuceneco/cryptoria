import React, { createContext, useEffect, useState } from 'react';

export const CoinsContext = createContext();

const CoinsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState('USD');
  const [coinsData, setCoinsData] = useState([]);

  const getCoins = () => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`)
      .then(response => response.json())
      .then(data => {
        setCoinsData(data);
      })
      .finally(() => setLoading(false));
  }
  
  useEffect(() => {
    getCoins();
  }, [])

  return (
    <CoinsContext.Provider value={{ 
      loading,
      coins: coinsData,
      currency,
      changeCurrency: setCurrency,
    }}>
      {children}
    </CoinsContext.Provider>
  );
};


export default CoinsProvider;