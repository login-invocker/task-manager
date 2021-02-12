import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Layout, Menu  } from 'antd';
import RouteConfigExample from './config/router'
import { UserOutlined, PlusOutlined, DatabaseOutlined } from '@ant-design/icons';
import './App.css'
const { Header, Content, Footer, Sider } = Layout;

const App = () =>{
  return <>
  <Layout>
  <Router>
  <Sider
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={broken => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
  >
    <div className="logo" >
    <p >Manager Task</p>
    </div>
    
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <Menu.Item key="1" icon={<UserOutlined />}>
      <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<PlusOutlined />}>
      <Link to="/create-task">Create Task</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<DatabaseOutlined />}>
      <Link to="/manager-task">Manager Task</Link>
      </Menu.Item>
      </Menu>
  </Sider>
  <Layout>
    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
    <Content style={{ margin: '24px 16px 0' }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
      
      <RouteConfigExample />

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED - Tạo bởi Dang Thanh Tung</Footer>
  </Layout>
  </Router>
</Layout>
</>
}
export default App;
