import React from 'react';
import Card from '../HOC/Card';
import Auth from '../HOC/Auth';

const profile = () => {
  return (
    <div>
      <Auth>
        <Card>Profile</Card>
      </Auth>
    </div>
  );
};

export default profile;
