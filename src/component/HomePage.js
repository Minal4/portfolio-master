import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './main/Main';
import { Contact } from './pages/Contact/Contact';
import { Faq } from './pages/Faq/Faq';
import { Portfolio } from './pages/Portfolio/Portfolio';

export const HomePage = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Portfolio />
      <Faq />
      <Contact />
      <Footer />
      <Routes>
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="faq" element={<Faq />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
