import React from "react";
import Home from './Home.js';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from './Header.js'
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import {useStateValue} from "./StateProvider";
import { useEffect } from "react";
import {auth} from './firebase'
function App() {
  const[{user},dispatch]=useStateValue();
 useEffect(()=>{
  const unsubscribe=auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      //user logged in
      dispatch({
        type:"SET_USER",
        user:authUser
      })
    }
    else{
      //user logged out 
      dispatch({
        type:"SET_USER",
        user:null
      })
    }
  })
  return ()=>{
    unsubscribe();
  }
 },[])
console.log("user is",user)
  return (
    <div>
      <Routes>
      <Route path='/login' element={<Login />} ></Route>
      </Routes>
      
      <Header />
        <Routes>
              <Route path='/' element={<Home />} ></Route>
              {/* <Route path='/login' element={<Login />} ></Route> */}
              <Route path='/checkout' element={<Checkout />} ></Route>
        </Routes>
       
    </div>
  );
}

export default App;
