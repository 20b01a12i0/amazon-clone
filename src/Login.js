import React from 'react';
import "./Login.css";
import {Link,useNavigate} from 'react-router-dom';
import {auth} from './firebase';
import { useState } from 'react';
const Login = () => {
    const navigate=useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('')
    const login=event=>{
        event.preventDefault();// prevents refersh
  auth.signInWithEmailAndPassword(email,password)
  .then((auth)=>{
      //logged in,redirect to homepage
     navigate("/")
  })
  .catch((e)=>alert(e.message));
    };
    const register=event=>{
        event.preventDefault();// prevents refersh
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
           //created a user and logged in,redirect to home age 
           navigate("/")
        })
        .catch((e)=>alert(e.message));
    };
    return (
        <div className="login">
            <Link to="/login">
              
           <img className="login_logo" src="https://tse1.mm.bing.net/th?id=OIP.p2AZTO1yhGdkyGx3jq-RwQHaCO&pid=Api&P=0&w=452&h=136" alt="" />
            
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange={event=>setEmail(event.target.value)}type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event=>setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit"className="login_signInButton">Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's condition of use & sale.Please see our privacy notice,our cookies Notice and our internet-based Ads Notice</p>
              <button onClick={register}  className="login_registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    );
};

export default Login;