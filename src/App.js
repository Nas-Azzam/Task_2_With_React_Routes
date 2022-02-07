import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Post from './components/Post';
import ABOUT from './components/About';
import './Styles/style.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header className='b d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
          <Link
            to='/'
            className='d-flex align-items-center mb-3 mb-md-0
              me-md-auto text-dark text-decoration-none'
          >
            <svg class='bi me-2' width='40' height='32'>
              <use src='src/assets/107.svg'></use>
            </svg>
            <span className='fs-4'>OneOseven</span>
          </Link>

          <ul className='nav nav-pills'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Post' className='nav-link'>
                Post
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Profile' className='nav-link'>
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/ABOUT' className='nav-link'>
                About
              </Link>
            </li>
          </ul>
        </header>

        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='Post' element={<Post />} exact />
          <Route path='Profile' element={<Profile />} exact />
          <Route path='ABOUT' element={<ABOUT />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
