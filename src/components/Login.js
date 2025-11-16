import React from 'react'

const Login = ({isLoggedIn ,setIsLoggedIn}) => {
  return (
    <div>
        <p>Login</p>
        <button onClick={() => setIsLoggedIn(prev => !prev)}>{isLoggedIn? "Log Out" : "Log In"}</button>
    </div>
  )
}

export default Login