import React from 'react';

const UserHoc = (rappedComponent, arg1) => {
  return (props) => {
    <>
      {arg1}
      <wrappedComponent />
    </>;
  };
};

export default UserHoc;
