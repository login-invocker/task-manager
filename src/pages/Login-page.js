import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  useHistory,
  useLocation
} from "react-router-dom";
import { Form, Input, Button } from 'antd';
import {authContext} from '../App'
import {loginService} from '../services/user-service'

function useAuth() {
  return useContext(authContext);
}

const LoginPages = () =>{
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  const onFinish = async (values) => {
    console.log(values)
    const islogin = loginService(values)
    console.log(islogin)
    if(islogin)
    return login()
    else
    return 
  };

  const onFinishFailed = (errorInfo) => {
  };

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="User Name"
        name="nameUser"
        rules={[
          {
            required: true,
            message: 'Please input your name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="passwordUser"
        rules={[
          {
            message: 'Please input your pass!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
    </div>
    );
}
export default LoginPages;
