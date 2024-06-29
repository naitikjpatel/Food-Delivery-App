import React from 'react'
import './LoginPopup.css'
import { useState } from 'preact/hooks'
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {
    const[currState,setCurrState]=useState("Login");
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">

            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img src={assets.cross_icon} alt="" onClick={()=>(setShowLogin(false))}/>
            </div>

            <div className="login-popup-inputs">
                {
                    currState==="Login"?<></>:<input type="text" name="" id="" placeholder='Your name' required/>
                }
                
                <input type="email" name="" placeholder='Your email' required id="" />
                <input type="password" name="" placeholder='Your password' required id="" />
            </div>
            <button>{currState==="Sign Up"?"Create account" : "Login"}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" name="" id="" required/>
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {
                currState==="Login"?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span> </p> :  <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
            }
            
          
        </form>
    </div>
  )
}

export default LoginPopup