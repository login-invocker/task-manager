import React from "react";
import { Layout } from 'antd';
import DoughnutComponent from '../Components/Doughnut.component'
import {getMatrixTasks} from "../services/task-bot-discord"


const { Header, Footer, Sider, Content } = Layout;
let allTask = []

const ManagerTimePage = () => {
    const [reload, setReload] = React.useState({})
    React.useEffect(async () => {
    const dataTask = await getMatrixTasks()
    allTask = dataTask
    setReload('')
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
    return (
        <Layout>
      <Sider>Sider</Sider>
      <Layout>
        {/* <Header>Header</Header> */}
        <Content>
            <DoughnutComponent config={wrap2ArrayTask()}/>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
    )
}

export default ManagerTimePage