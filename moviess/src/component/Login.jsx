import React from 'react'

const Login = ({setpage}) => {
  return (
    <div className='login'>
        <div>
      <h1>Login Page</h1>
      <input type="text" placeholder='email' />
      <input type="password" placeholder='password' name="" id="" />
      <button onClick={()=>setpage(1)}>Login</button>
      </div>
    </div>
  )
}

export default Login