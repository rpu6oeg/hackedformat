import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profil from './components/Profil/Profil';
import Basket from './components/Basket/Basket';
import Carousel from './components/Slider/Carousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/basket' element={<Basket/>} />
          <Route path='/' element={<Main />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/profil' element={<Profil />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
