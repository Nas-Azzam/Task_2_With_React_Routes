import React from 'react';

const Auth = (props) => {
  const pass = 'pass1122';
  if (pass !== 'pass1122') {
    return <h3>Your Password is worng!</h3>;
  } else {
    return props.children;
  }
};

export default Auth;
