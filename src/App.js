import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Route path='/' component={Home} />
      </div>
    </BrowserRouter>
  );
};

export default App;
