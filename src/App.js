import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

import Home from './components/Home';
import Profile from './components/Profile';
import User from './components/User';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <HashRouter>
        <Header />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/User' exact element={<User />} />
          <Route path='Profile' exact element={<Profile />} />

          <Route path='*' element={<div>404</div>} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
