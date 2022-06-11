import React, { createContext, useEffect, useState } from 'react';

export const CoinsContext = createContext();

const CoinsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [currency, setCurrency] = useState('USD');
  const [coinsData, setCoinsData] = useState([]);

  const getCoins = () => {
    setLoading(true);
    fetch(`/api/cryptocurrency?vs_currency=${currency}`)
      .then(response => response.json())
      .then(data => {
        setCoinsData(data);
      })
      .finally(() => setLoading(false));
  }

  const createCoin = (formData, user) => {
    if(!user) {
      return null;
    }
    setLoading(true);
    setErrorMessage(null)
    fetch("/api/cryptocurrency/create", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        user_id: user.id
      }),
    })
      .then(response => response.json())
      .then(data => {
        if(!data.error && data.id) {
          window.location.replace(`/coins/${data.id}`);
        } else {
          setErrorMessage(data.message)
        }
      })
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    getCoins();
  }, [currency]);

  return (
    <CoinsContext.Provider value={{
      loading,
      coins: coinsData,
      currency,
      errorMessage,
      createCoin,
      changeCurrency: setCurrency,
    }}>
      {children}
    </CoinsContext.Provider>
  );
};


export default CoinsProvider;