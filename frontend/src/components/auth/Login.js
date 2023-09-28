import React from 'react'
import './Login.css';
import logo from '../../photos/think.gif'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../Firebase';
function Login() {
  const handleSubmit = async() =>{
    await signInWithPopup(auth,provider).then((result)=>{
      console.log(result);
    }).catch((err) =>{
      console.log(err);
    })
  }
  return (
    <div className='login-container'>
      <div className='login-content'>
        <img src={logo} alt='logo'/>
        <button onClick={handleSubmit} className='btn-login'>Login to continue</button>
      </div>
    </div>
  )
}

export default Login
