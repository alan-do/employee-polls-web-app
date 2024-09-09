import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);

  // Kiểm tra nếu authedUser hoặc users là undefined
  if (!authedUser || !users) {
    return null;
  }

  const user = users[authedUser];

  // Kiểm tra nếu user là undefined
  if (!user) {
    return null;
  }

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/add">New Question</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          Hello, {user.name}
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;