import React from 'react';

const style = {
  backgroundColor: 'red',
};

const Card = (props) => {
  return (
    <>
      <div style={style} className='card text-white bg-primary'>
        <div claclassNamess='card-body'>
          <h4 className='card-title'>Title</h4>
          <p className='card-text'>Text</p>
        </div>
      </div>
      <div style={style}>{props.children}</div>
    </>
  );
};

export default Card;
