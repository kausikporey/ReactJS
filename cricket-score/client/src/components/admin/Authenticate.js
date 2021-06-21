import React from 'react'

const Authenticate = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
        if(user.username == 'kousik' && user.password == 'kp590'){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}

export default Authenticate;