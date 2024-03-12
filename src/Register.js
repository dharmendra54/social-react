import React, { useContext } from 'react'
import Home from './Home'
import { UserContext } from './App1'
import './Register.css'

export default function Register() {
    const {flag,setFlag}=useContext(UserContext);
  return (
    <>
        <div className='Register-model'>
            <div className='Register-model-content'>
                <div className="Rigister-header">
                <div className="Register-signup-title">Sign Up</div>
                <div onClick={() => setFlag(() => 0)} className="close">&times;</div>
            </div>
                <input type='text' placeholder='Enter Username'></input><br/><br/>
                <input type='email' placeholder='Enter Email'></input><br/><br/>
                <input type='password' placeholder=' Password'></input><br/><br/>
                <button onClick={() => setFlag((prevState) => 2)}>Submit</button>
            </div>
        </div>
    </>
  )
}

// import React from 'react'
// import  {useContext} from 'react'
// import {UserContext} from "./App1"
// import Home from './Home';

// export default function Register() {
//     const {flag,setFlag} = useContext(UserContext);
//   return (
//    <>
//      <div>Register</div>
//     <button onClick={() => setFlag((prevState) => 1)}>Create account</button>
//    </>
//   )
// }