/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import UserContext from '../Context/UserContext'; 

function Home() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Login Please</div>;

  return (
    <>
      <div>Welcome : {user.username}</div>
    </>
  );
}

export default Home;
