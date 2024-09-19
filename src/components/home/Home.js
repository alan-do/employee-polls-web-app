import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '../../redux/actions/authActions';
import { handleGetPolls } from '../../redux/actions/pollActions';
import DashBoard from './DashBoard/DashBoard';
import LeaderBoard from './LeaderBoard/LeaderBoard';
import PollCreation from './PoolCreation/PollCreation';
import { Layout, Menu, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Home.css';
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const questions = useSelector((state) => state.questions);
  const newQuestions = questions.newQuestions;
  const doneQuestions = questions.doneQuestions;
  const [tab, setTab] = useState('Home');
  const { Header, Content } = Layout;

  const navItems = ['Home', 'Leaderboard', 'New'].map((key) => ({
    key,
    label: `${key}`,
  }));

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      dispatch(handleGetPolls(parsedUser.answers || []));
    }
  }, [dispatch]);
  
  const logout = () => {
    localStorage.removeItem("user"); 
    dispatch(handleLogout());
    navigate('/login');
  };

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['Home']}
          items={navItems}
          style={{ flex: 1, minWidth: 0 }}
          onClick={(e) => setTab(e.key)}
        />
        <div className='user-info'>
          <img className='avatar' src={user.avatarURL} alt="avatar" />
          <p className='user-name'>{user.name}</p>
          <Button className='logout-button' onClick={logout}>Logout</Button>
        </div>
      </Header>
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '',
              borderRadius: '10px',
            }}
          >
            {tab === 'Home' && <DashBoard newQuestions={newQuestions} doneQuestions={doneQuestions} />}
            {tab === 'Leaderboard' && <LeaderBoard />}
            {tab === 'New' && <PollCreation />}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Home;