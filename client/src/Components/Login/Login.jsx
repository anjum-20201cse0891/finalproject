import { useState } from 'react';
import React from 'react'
import './Login.css'
import '../../App.css'
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'
const Login = () => {

    const [loginStatus, setLoginStatus] = useState('');

    const checkUsernameAndPassword = (username, password) => {
        if (username === 'MONA' && password === '1234567890') {
           return true;
        } else {
           return false;
        }
       };
       
       const handleLogin = (e) => {
        e.preventDefault();
       
        const isValidLogin = checkUsernameAndPassword(username, password);
       
        if (isValidLogin) {
           setLoginStatus('Login successful');
       
           // Redirect to the dashboard after a short delay (for demo purposes)
           setTimeout(() => {
             history.push('/dashboard');
           }, 1000);
        } else {
           setLoginStatus('Invalid username or password');
        }
       };
 return (
    <div className='loginPage flex'>
        <div className="container flex">
          <div className="videoDiv ">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
                <h2 className='title'>Know your Crop!!!!!</h2>
                <p>Adopt the peace of nature!!!!</p>
            </div>
            <div className="footerDiv flex">
                <span className="text">Don't have an account</span>
                <Link to={'/register'}>
                <button className='btn'>Sign Up</button></Link>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
                <img src={logo} alt="Logo Image" />
                <h3>Welcome Back!</h3>

            </div>
            <form action="" className='form grid'>
                <span className='showMessage'>Login status will go here</span>
                <div className="inputDiv">
                    <label htmlFor="username">Username</label>
                    <div className="input flex">
                    <FaUserShield className='icon' />
                        <input type="text" id="username" placeholder='Enter Your Farmer id' />

                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="password">Password</label>
                    <div className="input flex">
                    <BsFillShieldLockFill className='icon' />
                        <input type="password" id="password" placeholder='Enter Your Password' />

                    </div>
                </div>
            <Link to={'/dashboard'}>
                <button type='submit' className='btn flex' >LOGIN HERE!
                <AiOutlineSwapRight className='icon'/>
                </button>
                
            </Link>
            
            
         
            
            
            </form>
          </div>
        </div> 
        
    </div>
 )
}

export default Login


