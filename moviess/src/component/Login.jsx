import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setpage}) => {
  const navigate=useNavigate()
  return (
    <div className='login'>
        <div>
      <h1>Login Page</h1>
      <input type="text" placeholder='email' />
      <input type="password" placeholder='password' name="" id="" />
      <button onClick={()=>navigate("/rayen")}>Login</button>
      </div>
    </div>
  )
}

export default Login