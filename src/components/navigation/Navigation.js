import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active">
            New Poll
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
        {authedUser && (
          <li>
            <span>Hello, {users[authedUser].name}</span>
            <NavLink to="/logout" activeClassName="active">
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;