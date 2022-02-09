import React from 'react';

const Card1 = () => {
  return (
    <div>
      <div className='ui card'>
        <div className='image'>
          <img src='/images/avatar/large/elliot.jpg' />
        </div>
        <div className='content'>
          <div className='header'>Elliot Baker</div>
          <div className='meta'>Friend</div>
          <div className='description'>
            Elliot is a sound engineer living in Nashville who enjoys playing
            guitar and hanging with his cat.
          </div>
        </div>
        <div className='extra content'>
          <a>
            <i aria-hidden='true' className='user icon'></i>16 Friends
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card1;
