import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleInitialData } from '../../redux/actions/userActions';
import { setAuthedUser } from '../../redux/actions/authActions';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersList = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const handleLogin = () => {
    if (selectedUser) {
      dispatch(setAuthedUser(selectedUser));
      navigate('/home');
    }
  };

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
          <option>Đang tải...</option>
        )}
      </select>
      <button onClick={handleLogin} disabled={!selectedUser}>Login</button>
    </div>
  );
}

export default Login;