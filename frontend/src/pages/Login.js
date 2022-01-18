import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material"
import { Link, Navigate } from "react-router-dom";
import suite from '../suite'

const Login = () => {
  const [toLogin, setToLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disclaimer, setDisclaimer] = useState('')
  const [inputTest, setInputTest] = useState({ email: '', password: '' })
  console.log(email, password)

  function handleChange({ target: { name, value } }) {
    if (name === "email") setEmail(value)
    if (name === "password") setPassword(value)
    suite({ email, password }, name)
  }
  console.log(suite.get().getErrors('password'))
  
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
    content.message === "success" ? setToLogin(true) : setDisclaimer(content.message)
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
        value={email}
        helperText={ 'fixHere' }
        error={ 'fixHere' }
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        helperText={ 'fixHere' }
        error={ 'fixHere' }
        onChange={handleChange}
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
      <h5>{ disclaimer }</h5>
      <h6>Don't have an account? <Link to="/register">Register</Link></h6>
    </form>
  );
}

export default Login
