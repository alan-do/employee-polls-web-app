import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../../redux/actions/authActions';
import { handleGetUsers } from '../../redux/actions/userActions';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usersList = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState('');
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(handleGetUsers());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  const login = () => {
    dispatch(handleLogin(selectedUser));
  }

  return (
    <div>
      <h1>Login</h1>
      <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="" disabled>Select User</option>
        {usersList && Object.keys(usersList).length > 0 ? (
          Object.values(usersList).map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))
        ) : (
          <option>Loading...</option>
        )}
      </select>
      <button onClick={login} disabled={!selectedUser}>Login</button>
    </div>
  );
}

export default Login;