import React, { useEffect } from 'react'
import NavBar from './NavBar'

const Register = () => {

  useEffect(()=>{
    document.title = "Cavvoh - Register"
  })    

  return (
    <>
        <NavBar />
    </>
  )
}

export default Register