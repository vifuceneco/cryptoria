import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = ({ email, password }) => {
    setLoading(true);
    fetch(`/api/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.email) {
          setUser(data);
        }
      })
      .finally(() => setLoading(false));
  }

  const logout = ({ email, password }) => {
    setLoading(true);
    fetch(`/api/login`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === true) {
          setUser(null);
        }
      })
      .finally(() => setLoading(false));
  }


  return (
    <UserContext.Provider value={{
      user,
      login,
      loading,
      logout,
    }}>
      {children}
    </UserContext.Provider>
  );
};


export default UserProvider;