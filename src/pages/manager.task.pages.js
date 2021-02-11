import React, { useState, useEffect } from 'react';
import "./manage-task.css"
import { Table, Input, InputNumber, Popconfirm, Form, Typography, DatePicker } from 'antd';

import Notification from "../Components/nofication-component";
import {getTasks, updatTask, removeTask} from "../services/task-bot-discord"
import moment from 'moment'

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'YYY-MM-DD'];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'chinh-xac-la-date' 
  ? <DatePicker  
  format={dateFormatList}  />
  : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const ManagerTask = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    const callApi = async () => {
      const dataRes = await getTasks();
      let dataMap = []
      if(dataRes){
        for (let i = 0; i < dataRes.length; i++) {
            dataMap.push({
              key: i.toString(),
              id: dataRes[i]['_id'],
              title: dataRes[i]['title'],
              content: dataRes[i]['content'] || "Chưa cập nhập",
            //   date:null
              date: moment(dataRes[i]['date']).format(dateFormatList[0])
            });
          }
        setData(dataMap)
        Notification({
          type: "success",
          message: "Lấy dữ liệu thành công!"
        })
      }
      else{
        Notification({
          type: "error",
          message: "Lấy dữ liệu thất bại!"
        })
      }
    }
    callApi()
  }, [])

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
        id: '',
      title: '',
      content: '',
      date: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
        
      if (index > -1) {
        const item = newData[index];
console.log(item)
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
        try{
            const isUpdate = await updatTask(newData[index]);
            if(isUpdate)
            Notification({
                type: "success",
                message: "Cập nhật thông tin thành công!"
            })
            else
            Notification({
                type: "error",
                message: "Thử lại sau!"
            })
        }catch{
            Notification({
                type: "error",
                message: "Thử lại sau!"
            })
    }
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const remove = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
        
      if (index > -1) {
        newData.splice(index, 1);
        setData(newData);
        setEditingKey('');
        try{
            const isUpdate = await removeTask(newData[index]);
            if(isUpdate)
            Notification({
                type: "success",
                message: "Xóa thành công!"
            })
            else
            Notification({
                type: "error",
                message: "Thử lại sau!"
            })
        }catch{
            Notification({
                type: "error",
                message: "Thử lại sau!"
            })
    }
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
        title: 'id Task',
        dataIndex: 'id',
        width: '5%',
        editable: false,
      },
    {
      title: 'Title Task',
      dataIndex: 'title',
      width: '20%',
      editable: true,
    },
    {
      title: 'Content Task',
      dataIndex: 'content',
      width: '25%',
      editable: true,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      width: '25%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
            <a
              href="javascript:;"
              onClick={() => remove(record.key)}
              style={{
                marginLeft: 8,
              }}
            >
              Remove
            </a>
          </span>
        ) : (
        <>
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        </>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'date' ? 'date' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default ManagerTask