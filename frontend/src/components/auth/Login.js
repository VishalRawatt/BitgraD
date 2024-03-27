import React from 'react'
import './Login.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import google from '../../photos/google.png'

function Login() {

  const handleSubmit = async () => {
    await signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className='login-container'>
      <div className='login-content col-md-6'>
        <div className='heading'>
          <p>Welcome to BitgraD</p>
        </div>
      </div>
      <div className='login-content col-md-6'>
          <button className='nbtn'>
            <img src={google} onClick={handleSubmit} alt='googleimg' />
          </button>
      </div>
    </div>
  )
}

export default Login
