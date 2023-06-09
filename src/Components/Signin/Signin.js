import React from "react"; 

import './Signin.css'
import {Outlet,useNavigate} from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className="container">
        <div className="card">
            <p className="f4">Sign In</p>
            <div className="inputBox1">
                <input type="text" required="required" />
                <span className="user">Email</span>
            </div>
            <div className="inputBox">
                <input type="password" required="required"/>
                <span>Password</span>
            </div>

            <button className="enter" onClick={() =>{
                navigate('/home')
                }}>Enter</button>
             <p className="pointer grow f4 underline black-90 " onClick={() =>{
                navigate('/register')
             }}>Register</p>
        
        </div>
    </div>
    <Outlet/>
    </>
    );
}



export default Signin;