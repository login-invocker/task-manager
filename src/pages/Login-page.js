import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeaderPage from '../Components/header-pages'
import { Layout, Menu, Tooltip, Button  } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, ExportOutlined, UserSwitchOutlined, InboxOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

const LoginPages = () =>{
  return <>
            <HeaderPage onback="null" title="Login"/>
        </>
}
export default LoginPages;
