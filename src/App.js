import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Coin from './pages/Coin';
import Home from './pages/Home';
// import Page404 from './pages/404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="coins/:id" element={<Coin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
