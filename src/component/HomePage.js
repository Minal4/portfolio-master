import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './main/Main';
import { Contact } from './pages/Contact/Contact';
import { Faq } from './pages/Faq/Faq';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { useRef, useEffect } from 'react';


export const HomePage = () => {
  const ref = useRef();
  // console.log(ref.current, 'object')
  useEffect(() => {
    const el2 = ref.current;
    console.log(el2); // 👈️ element here
  }, []);
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
