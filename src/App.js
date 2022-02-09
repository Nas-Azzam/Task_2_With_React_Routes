import React from 'react';
import { Route, Switch, Routes, HashRouter, Redirect } from 'react-router-dom';
import './Styles/style.css';

import Home from './components/Home';
import Profile from './components/Profile';
import Post from './components/Post';
import ABOUT from './components/About';
import Card1 from './components/Card1';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <HashRouter>
        <Header />

        <Routes>
          <Switch>
            <Route path='/' exact element={<Home />} />
            <Route path='Post' element={<Post />} />
            <Route path='Post/:id' exact element={<Card1 />} />
            <Route path='Profile' exact element={<Profile />} />
            <Route path='ABOUT' exact element={<ABOUT />} />
            {/* <Redirect from='/Profile' to='/' /> */}
            <Route
              render={() => {
                <div>404</div>;
              }}
            />
          </Switch>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
