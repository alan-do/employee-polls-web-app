import React, {  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
function Home() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  console.log('userId', userId);
  const usersList = useSelector((state) => state.users);
  console.log('usersList', usersList);
  const user = usersList[userId];

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <h1>Welcome, {user ? user.name : 'Guest'}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;