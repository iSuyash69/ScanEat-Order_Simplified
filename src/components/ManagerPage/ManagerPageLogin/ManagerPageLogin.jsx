import { useState } from "react";
import "../ManagerPage.css";
import ManagerPage from "../ManagerPage";
import { Link } from "react-router-dom";

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
                <Link to={"dashboard"}><button style={{cursor:'pointer',position:'absolute',top:'10',right:'30',padding:'9px 15px',borderRadius:'7px',background:'rgb(0, 123, 255)',color:'white',fontWeight:'500',fontSize:'15px',border:'solid 1px'}}>Manager DashBoard</button></Link>
            </div>
            
            ):(
                <ManagerPage/>
            )}
        </div>
    );
}

export default ManagerPageLogin;