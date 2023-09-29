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
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" class="btn btn-primary" style={{background:"black"}}>SignIn</button>
          <p><b>New User ? </b><a href='#43534'style={{textDecoration:"none",color:"white", fontWeight:"500"}}> SignUp</a></p>
          <button className='nbtn'>
          <img src={google} onClick={handleSubmit} alt='googleimg'/>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
