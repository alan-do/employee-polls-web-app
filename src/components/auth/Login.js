import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthedUser } from '../../redux/actions/authActions';

const Login = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (selectedUser) {
      dispatch(setAuthedUser(selectedUser));
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="" disabled>Select a user</option>
        {Object.keys(users).map((userId) => (
          <option key={userId} value={userId}>
            {users[userId].name}
          </option>
        ))}
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;