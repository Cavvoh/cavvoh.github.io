import React, { useEffect } from 'react'
import NavBar from './NavBar'

const Login = () => {

  useEffect(()=>{
    document.title = "Cavvoh - Login"
  })    

  return (
    <>
        <NavBar />
    </>
  )
}

export default Login