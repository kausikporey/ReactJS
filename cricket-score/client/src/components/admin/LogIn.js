import React, { useState } from 'react'
import './LogIn.css'
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom'


const LogIn = () => {
    const [user,setUser] = useState({username:'',password:''})
    const [authState,setauthState] = useState(true)
    const onChangeHandler = (e) => {
        const {name,value} = e.target;
        setUser({...user,
            [name] : value,
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(user.username == 'kousik' && user.password == 'kp590'){
            localStorage.setItem("user",JSON.stringify(user))  
            window.location.href="http://localhost:3000/matchlist"
        }else{
            setauthState(false)
        }
    }


    return (
        <div className="main">
            <div className="container h-80">
                <div className="row align-items-center h-100">
                    <div className="col-3 mx-auto">
                        <div className="text-center">
                            <img id="profile-img" className="rounded-circle profile-img-card" src="https://i.imgur.com/6b6psnA.png" />
                            <p id="profile-name" className="profile-name-card"></p>
                            {authState == false ? <div class="alert alert-danger" role="alert">
                                Wrong Credentials!
                            </div> : '' }
                            <form  className="form-signin" onSubmit={onSubmitHandler}>
                                <input type="password" value={user.username} onChange={onChangeHandler} name="username" id="inputUsername" className="form-control form-group" placeholder="username" required autoFocus />
                                <input type="password" value={user.password} onChange={onChangeHandler} name="password" id="inputPassword" className="form-control form-group" placeholder="password" required autoFocus />
                                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">ENTER</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn
