import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../redux/actions/authActions";
import { handleGetUsers } from "../../redux/actions/userActions";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button, Flex, Layout, Image } from "antd";
const { Header, Footer, Sider, Content } = Layout;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usersList = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  useEffect(() => {
    dispatch(handleGetUsers());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const login = () => {
    dispatch(handleLogin(selectedUser));
  };

  const items =
    usersList && Object.keys(usersList).length > 0
      ? Object.values(usersList).map((user) => ({
          key: user.id,
          label: user.name,
          avatar: user.avatarURL,
        }))
      : [{ key: "loading", label: "Loading..." }];

  const handleMenuClick = (e) => {
    setSelectedUser(e.key);
  };

  return (
    <Flex gap="middle" wrap>
      <Layout style={{ height: "100vh" }}>
        <Header
          style={{
            background: "#fff",
            padding: 0,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          LOGIN
        </Header>
        <Content
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#aaf",
            alignItems: "center",
          }}
        >
          <Image.PreviewGroup
            style={{
              height: "100%",
            }}
            items={[
            ]}
          ></Image.PreviewGroup>
          <Dropdown.Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            menu={{
              items,
              onClick: handleMenuClick,
            }}
            placement="bottom"
            icon={<UserOutlined />}
          >
            {selectedUser ? usersList[selectedUser].name : "Select User"}
          </Dropdown.Button>

          <Button type="primary" onClick={login} disabled={!selectedUser}>
            Đăng nhập
          </Button>
        </Content>
        <Footer style={{ background: "#fff", padding: 0 }}>Footer</Footer>
      </Layout>
    </Flex>
    // <Flex gap='middle' wrap='wrap'>
    //   <Dropdown.Button
    //     menu={{
    //       items,
    //       onClick: handleMenuClick,
    //     }}
    //     placement="bottom"
    //     icon={<UserOutlined />}
    //   >
    //     {selectedUser ? usersList[selectedUser].name : "Select User"}
    //   </Dropdown.Button>

    //   <Button type="primary" onClick={login} disabled={!selectedUser}>
    //     Đăng nhập
    //   </Button>
    // </Flex>
  );
}

export default Login;
