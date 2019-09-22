import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';

import GlobalStyle from './styles/global';

import 'rc-slider/assets/index.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Menu />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
