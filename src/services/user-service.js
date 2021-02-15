const axios = require('axios')
const loginService =  (user) => {
    if(user.passwordUser=== "q" && user.nameUser === "q"){
        return true
    }else{
        return false
    }
} 

export{
    loginService
}