import React from "react";
import { Row, Col } from 'antd';
import DoughnutComponent from '../Components/Doughnut.component'
import PiceChartRechar from '../Components/PiceChartRechar.component'
import {getMatrixTasks} from "../services/task-bot-discord"
import HeaderPage from '../Components/header-pages'
import Notification from "../Components/nofication-component";

let allTask = []
let colors = []
const ManagerTimePage = () => {
    const [reload, setReload] = React.useState({})
    // const [color, setColors] = React.useState([])
    React.useEffect(async () => {
        const dataTask = await getMatrixTasks()
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

    const wrap2ArrayTask = () => {
        const titleArray = allTask.map(task => task.title);
        const timePercentArray  =  allTask.map(task => task.timePercent);
        const result = {
            labels:titleArray,
            data: timePercentArray
        }
        return result
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
        <HeaderPage onback="null" title="Manager Time with matrix EISENHOWER"/>
        <Row>
        <Col span={18} push={6}>
        <DoughnutComponent colors={colors} config={wrap2ArrayTask()}/>

        </Col>
        <Col span={6} pull={18}>
        <PiceChartRechar colors={colors} config={dataForPiceChartRechar()}/>

        </Col>
      </Row>
      </>
    )
}

export default ManagerTimePage