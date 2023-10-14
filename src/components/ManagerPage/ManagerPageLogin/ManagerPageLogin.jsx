import { useState } from "react";
import "../ManagerPage.css";
import { useNavigate } from "react-router-dom";
import ManagerPage from "../ManagerPage";

const ManagerPageLogin=()=>{

    const [password,setPassword]=useState('');
    const [isLogin,setIsLogin]=useState(false);

    const handlePasswordChange=(event)=>{
        setPassword(event.target.value);
    }

    const submitButton=()=>{
        if(password=='2580'){
            setIsLogin(true);
        }
        else{
            alert("Invalid Password");
        }
    }

    return(
        <div className="manager-login-page">
            {(!isLogin)?(
                <div class="login-container">
                <h2>Admin Login</h2>
                <div class="login-form">
                    <label for="username">Username:</label>
                    <input type="text" id="username" placeholder="Enter your username"/>
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange}/>
                    <button onClick={submitButton}>Login</button>
                </div>
            </div>
            ):(
                <ManagerPage/>
            )}
        </div>
    );
}

export default ManagerPageLogin;