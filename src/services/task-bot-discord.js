const axios = require('axios')
const config = require('../config/config')
const createtask = async(task) => {
    try{
        axios.post(`${config.API_URL}/api/task`, {
            "title": task.title,
            "content": task.content
        })
        return true
    }catch{
        return false
    }
}

const getTasks = async() => {
    try{
        const response = await axios.get(`${config.API_URL}/api/task`)
        return response.data
    }catch{
        return false
    }
}

const removeTask = async(task) => {
    console.log(task)
    try{
        const response = await axios.delete(`${config.API_URL}/api/task/${task.id}`)
        return response.status === 200 ? true : false
    }catch{
        return false
    }
}

const updateTask = async (task) => {
    try{
        const response = await axios.put(`${config.API_URL}/api/task/`,{
            task
        })
        return response.data.code === 200 ? true : false
    }catch{
        return false
    }
}
export{
    createtask,
    getTasks,
    updateTask,
    removeTask,
}