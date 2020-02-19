import React from 'react';

import { BrowserRouter } from 'react-router-dom'

import Header from './Header';
import MainPanel from './MainPanel';
import Footer from './Footer'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <MainPanel />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;