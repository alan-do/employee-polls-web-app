import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '../../redux/actions/authActions';
import { handleGetPolls } from '../../redux/actions/pollActions';
import DashBoard from './DashBoard';
import LeaderBoard from './LeaderBoard';
import PollCreation from './PollCreation';
import { Layout, Menu, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.userId);
  const users = useSelector((state) => state.users);
  const newQuestions = useSelector((state) => state.questions.newQuestions);
  const doneQuestions = useSelector((state) => state.questions.doneQuestions);
  const user = users[userId];
  const [tab, setTab] = useState('Home');
  const { Header, Content } = Layout;

  const navItems = ['Home', 'Leaderboard', 'New'].map((key) => ({
    key,
    label: `${key}`,
  }));

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    console.log('storedUser', storedUser);
    if (storedUser) {
      dispatch(handleGetPolls(storedUser.answers || []));
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
        <Button onClick={logout}>Logout</Button>
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