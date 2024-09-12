import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '../../redux/actions/authActions';
import { handleGetPolls } from '../../redux/actions/pollActions';
import DashBoard from './DashBoard';
import LeaderBoard from './LeaderBoard';
import PollCreation from './PollCreation';

function Home() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const users = useSelector((state) => state.users);
  const newQuestions = useSelector((state) => state.questions.newQuestions);
  const doneQuestions = useSelector((state) => state.questions.doneQuestions);
  const user = users[userId];
  const [tab, setTab] = useState('home');

  useEffect(() => {
    dispatch(handleGetPolls(user.answers || []));
  }, [dispatch, user.answers]);
  
  const logout = () => {
    dispatch(handleLogout());
  };

  return (
    <div>
      <div className="nav">
        <button onClick={() => setTab('home')}>Home</button>
        <button onClick={() => setTab('leaderboard')}>Leaderboard</button>
        <button onClick={() => setTab('new')}>New</button>
      </div>
      <h1 className="text-2xl font-bold">Welcome, {user ? user.name : 'Guest'}!</h1>
      {tab === 'home' && <DashBoard newQuestions={newQuestions} doneQuestions={doneQuestions} />}
      {tab === 'leaderboard' && <LeaderBoard />}
      {tab === 'new' && <PollCreation />}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;