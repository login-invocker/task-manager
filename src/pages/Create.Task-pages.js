import React from "react";
import HeaderPages from '../Components/header-pages'
import { Form, Input, Button, Checkbox } from 'antd';
import {createtask} from '../services/task-bot-discord'
import Notification from '../Components/nofication-component';

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

const CreateTask = () =>{
    const onFinish = async (values) => {
        const isCreate = await createtask(values)
        if(isCreate)
        return Notification({
            type: "success",
            message: "Tạo task thành công"
          })
        else
        return Notification({
            type: "success",
            message: "Tạo task thất bại"
          })
      };
    
      const onFinishFailed = (errorInfo) => {
      };
  return <>
  <HeaderPages onback="null" title="Create Task" subTitle="Create a today task"/>
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
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input your title of task',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Content"
        name="content"
        rules={[
          {
            message: 'Please input your content!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
</>
}
export default CreateTask;
