import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material"
import { Link, Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const Register = () => {
  const [toLogin, setToLogin] = useState(false)
  const [disclaimer, setDisclaimer] = useState('')
  useEffect(() => {
    setToLogin(false)
    setDisclaimer('')
  }, [])
  const { 
    name, setName,
    email, setEmail,
    password, setPassword,
  } = useGlobalContext()

  const submit = async (e) => {
    e.preventDefault()
    
    const response = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    const content = await response.json()
    if (content.id === 0) {
      setName('')
      setEmail('')
      setPassword('')
      return setDisclaimer('user already registered')
    }
    setToLogin(true)
  }
  
  if (toLogin) {
    return <Navigate to='/' />
  }
  return (
    <form id='registerForms' onSubmit={submit}>
      <h1>Welcome to <span>willbook</span></h1>
      <TextField
        margin="normal"
        fullWidth
        required
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth
        required
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth
        required
        id="username"
        label="Username"
        name="username"
        autoComplete="given-username"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>{ disclaimer }</p>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3 }}
      >
        Register
      </Button>
      <h6>Already have an account? <Link to="/">Sign In Now</Link></h6>
    </form>
  );
}

export default Register
