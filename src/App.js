import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Coin from './pages/Coin';
import CreateCoin from './pages/CreateCoin';
import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import PageEmpty from './pages/PageEmpty';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="coins/:id" element={<Coin />} />
            <Route path="coins/create" element={<CreateCoin />} />
            <Route path="user/profile" element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<PageEmpty />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
