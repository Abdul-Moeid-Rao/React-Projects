
import React, { useContext } from 'react';
import UserContext from '../Context/UserContext'; // Corrected import path

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
