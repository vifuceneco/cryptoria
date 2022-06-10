import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const login = ({ email, password }) => {
    setLoading(true);
    setErrorMessage(null);
    fetch(`/api/users/login`, {
      method: 'POST',
      headers : { "Content-Type" : "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error && data.user) {
          setUser(data.user);
        } else {
          setErrorMessage(data.message);
        }
      })
      .finally(() => setLoading(false));
  }

  const logout = () => {
    setLoading(true);
    fetch(`/api/users/logout`, {
      method: 'POST',
      headers : { "Content-Type" : "application/json" },
      body: JSON.stringify({
        token: user.token
      })
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error && data.logout) {
          setUser(null);
          window.location.replace("/");        }
      })
      .finally(() => setLoading(false));
  }


  return (
    <UserContext.Provider value={{
      user,
      login,
      loading,
      logout,
      errorMessage,
    }}>
      {children}
    </UserContext.Provider>
  );
};


export default UserProvider;