const axios = require('axios')
const config = require('../config/config')

const registerUserService = async (user) => {
    const userRequest = {
        "username": user.username,
        "password": user.password,
        "firstName": user.firstName,
        "lastName": user.lastName,
    
        "email": user.email,
        "cellphone": user.cellphone,
        "birthday": user.birthday
    }

    
    const res = await axios.post(`${config.API_URL}/api/user`, userRequest)
    return res
} 

const loginService = async (user) => {

    const userRequest = {
        "username": user.username,
        "password": user.password
    }
    
    const res = await axios.post(`${config.API_URL}/api/user/login`, userRequest)
    return res
}
export{
    loginService,
    registerUserService
}