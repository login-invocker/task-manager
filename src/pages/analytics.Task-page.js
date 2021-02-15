import React from "react";
import { Row, Col,Button, DatePicker, Space } from 'antd';
import BarChartComponent from '../Components/Bar-chart.component'
import {getTasks} from "../services/task-bot-discord"
import HeaderPage from '../Components/header-pages'
import Notification from "../Components/nofication-component";
import {
    SyncOutlined,
  } from '@ant-design/icons';
  import moment from "moment"
  const { RangePicker } = DatePicker;



let allTask = []
let colors = []
const ManagerTimePage = () => {
    const [reload, setReload] = React.useState({})
    React.useEffect(async () => {
        const dataTask = await getTasks()
        console.log(dataTask)
        if(dataTask){
            Notification({
                type: "success",
                message: "Lấy dữ liệu thành công!"
            })
            allTask = dataTask

            const setBg = () => {
                    allTask.forEach(() => {
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    randomColor = "#" + randomColor;
                    colors.push(randomColor)
                })    
            }
            setBg()
            setReload('')
        }

    })

    function onChange(dates, dateStrings) {
        console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
      }

    const dataForPiceChartRechar = () => {
        let data = [];
        allTask.forEach(task => {
            const x = {
                name: task.title,
                value:  task.timePercent
            }
            data.push(x)
        })
        return data
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
        {/* <DoughnutComponent colors={colors} config={wrap2ArrayTask()}/> */}
        <BarChartComponent colors={colors} config={dataForPiceChartRechar()}/>

        </Col>
        <Col span={6} pull={18}>

        </Col>
      </Row>
      </>
    )
}

export default ManagerTimePage