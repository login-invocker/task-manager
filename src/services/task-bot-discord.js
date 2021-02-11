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

const updatTask = async () => {

}
const removeTask = async() => {
    
}
export{
    createtask,
    getTasks,
    updatTask,
    removeTask
}