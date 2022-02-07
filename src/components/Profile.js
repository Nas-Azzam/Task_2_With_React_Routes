import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  console.log(props);
  return (
    <div className='container'>
      Profile
      <Link
        to={{
          pathname: '/Profile/Post',
          hash: '#hash',
          search: '?search=value',
        }}
      >
        Post
      </Link>
    </div>
  );
};

export default Profile;
