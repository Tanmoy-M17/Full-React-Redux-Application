import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../Redux/AuthReducer/Action';

const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const location=useLocation()
  const [Email,setEmail]=useState("eve.holt@reqres.in");
  const [Password,setPassword]=useState("");
  const comingfrom=location.state?.from?.pathname || "/"
 
  const Handelsubmit=(e)=>{
    e.preventDefault();
    if(Email&&Password){
      dispatch(login({Email,Password})).then((r)=>{
        if(r.type==="USER_LOGIN_SUCCESS"){
          navigate(comingfrom,{replace:true})
        }
      })
    }
  }
  return(
    <div>
      <form onSubmit={Handelsubmit}>
        <div>
          <label>User Email</label>
          <input type="email" value={Email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter User Email'/>
        </div>
        <div>
          <label>User Password</label>
          <input type="password" value={Password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter User password'/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login