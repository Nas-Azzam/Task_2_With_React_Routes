import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='b d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
        <NavLink
          to='/'
          className='d-flex align-items-center mb-3 mb-md-0
              me-md-auto text-dark text-decoration-none'
        >
          <svg className='bi me-2' width='40' height='32'>
            <use src='src/assets/107.svg'></use>
          </svg>
          <span className='fs-4'>OneOseven</span>
        </NavLink>

        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <NavLink to='/' className='nav-link p-2 selected'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/Post' className='nav-link'>
              Post
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to={{
                pathname: '/Profile',
                hash: '#Profile',
                search: '?query=abc',
              }}
              className='nav-link'
            >
              Profile
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/ABOUT' className='nav-link'>
              About
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
