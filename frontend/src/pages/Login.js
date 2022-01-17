import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material"
import { Link, Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const Login = () => {
  const [toLogin, setToLogin] = useState(false)
  const { 
    email, setEmail,
    password, setPassword 
  } = useGlobalContext()

  useEffect(() => {
    setToLogin(false)
    setEmail('')
    setPassword('')
  }, [])
  
  const submit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    });
    const content = await response.json()
    if (content.message === "success") {
      setToLogin(true)
    } else {
      window.alert(content.message)
    }
  }
  if (toLogin) {
    return <Navigate to="/home"/>
  }
  return (
    <form id='loginForms' onSubmit={submit}>
      <h1>Hi :D</h1>
      <p>Welcome back!</p>
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        id="signIn"
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3 }}
      >
        Sign In
      </Button>
      <h6>Don't have an account? <Link to="/register">Register</Link></h6>
    </form>
  );
}

export default Login
