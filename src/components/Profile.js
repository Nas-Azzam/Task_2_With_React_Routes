import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
const Profile = (props) => {
  console.log(props);
  const [redrt, setRedrt] = useState(false);

  // const redirct = () => {
  //   if (redrt) {
  //     return <Redirect to='/' />;
  //   }
  // };
  return (
    <div className='container'>
      <Link
        to={{
          pathname: `/post`,
        }}
      >
        From Profile to Post
      </Link>
    </div>
  );
};
export default Profile;
