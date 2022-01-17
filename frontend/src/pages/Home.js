import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from '@mui/material'
import { useGlobalContext } from "../context";

const Home = () => {
  const [toHome, setToHome] = useState(false)
  
  const { 
   name, setName,
   email, setEmail 
  } = useGlobalContext()

  useEffect(() => {
    setToHome(false)
    setName('')
    setEmail('')
  }, [])

  useEffect(() => {
    (
     async () => {
       const response = await fetch('http://localhost:8080/api/user', {
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
       });
       const content = await response.json()

       if (content.message) {
         window.alert(content.message)
         setToHome(true)
       } else {
         setName(content.name)
         setEmail(content.email)
       }
     }
    )()
  }, [])
  const logout = async () => {
    const response = await fetch('http://localhost:8080/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      credentials: 'include',
    });
    const content = await response.json()
    if (content.message === 'success') {
      setToHome(true)
    }
  }
  if (toHome) {
    return <Navigate to="/"/>
  }
  return (
   <section>
    <h1>Home</h1>
    <h1>Name: { name }</h1>
    <h1>Email: { email }</h1>
    <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3 }}
        onClick={() => logout()}
    >
      Logout
    </Button>
   </section>
  );
}

export default Home
