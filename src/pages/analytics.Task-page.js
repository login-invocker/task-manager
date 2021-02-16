import React from "react";
import { Row, Col,Button, DatePicker, Space } from 'antd';
import BarChartComponent from '../Components/Bar-chart.component'
import {getDataForBarChar} from "../services/task-bot-discord"
import HeaderPage from '../Components/header-pages'
import Notification from "../Components/nofication-component";
import {
    SyncOutlined,
  } from '@ant-design/icons';
  import moment from "moment"
  const { RangePicker } = DatePicker;


const ManagerTimePage = () => {
    const [reload, setReload] = React.useState({})
    const [dataTask, setDataTask] = React.useState({})
    
    React.useEffect( () => {
         getDataForBarChar().then(data=> {
            console.log(data)
            setDataTask(data)
            if(data){
                Notification({
                    type: "success",
                    message: "Lấy dữ liệu thành công!"
                })
            }
        })
    return true
    }, [])

    function onChange(dates, dateStrings) {
        const ranger = {
            startDate: dateStrings[0],
            endDate: dateStrings[1]
        }
        getDataForBarChar(ranger).then(data=> {
            console.log(data)
            setDataTask(data)
            if(data){
                Notification({
                    type: "success",
                    message: "Lấy dữ liệu mới công!"
                })
            }
        })
      }

    return (
        <>
        <HeaderPage onback="null" 
        title="Manager Time with matrix EISENHOWER"
        extra={[
            <Space direction="vertical" size={12}>
                <RangePicker
                ranges={{
                        Today: [moment(), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                        'This week': [moment().startOf('week'), moment().endOf('week')],

                }}
                onChange={onChange}   
            //    showTime
               />
                
            </Space>,
            <Button type="primary" 
            icon={<SyncOutlined spin/>}
            onClick={() => setReload()}>
                Click to async data
            </Button>
        ]}
        />
        <Row>
        <Col span={18} push={6}>
        <BarChartComponent config={dataTask}/>

        </Col>
        <Col span={6} pull={18}>

        </Col>
      </Row>
      </>
    )
}

export default ManagerTimePage