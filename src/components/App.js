import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleInitialData } from '../redux/actions/sharedActions.js';
import Login from '../components/auth/Login';
import Logout from '../components/auth/Logout';

import Navigation from '../components/navigation/Navigation';
import AddPoll from '../components/polls/AddPoll';
import PollDetails from '../components/polls/PollDetails';
import Leaderboard from '../components/users/Leaderboard';
import Home from '../components/home/Home';
import NotFound from '../components/common/NotFound';



const PrivateRoute = ({ component: Component, ...rest }) => {
  const authedUser = useSelector((state) => state.authedUser);
  return (
    <Route
      {...rest}
      element={authedUser ? <Component /> : <Navigate to="/login" />}
    />
  );
};

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (  
    <Router>
      <div className="App">
        <Navigation />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/add" component={AddPoll} />
            <PrivateRoute path="/leaderboard" component={Leaderboard} />
            <PrivateRoute path="/questions/:question_id" component={PollDetails} />
            <PrivateRoute path="/logout" component={Logout} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;