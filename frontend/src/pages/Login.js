import React, { useState } from "react";
import { TextField, Button } from "@mui/material"
import { Link, Navigate } from "react-router-dom";
import suite from '../suite'

const Login = () => {
  const [toLogin, setToLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputError, setInputError] = useState({ email: '', password: '' })

  let res;
  const submit = async (e) => {
    e.preventDefault()
  
    suite({ email, password }, "email")
    suite({ email, password }, "password")
    res = suite.get()

    setInputError( { ...inputError, email: res.getErrors('email')[0], password: res.getErrors('password')[0] })

    if (res.errorCount > 0) return

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

    if (content.message === "incorrect password") return setInputError({ ...inputError, password: "incorrect password"})
    
    content.message === "success" ? setToLogin(true) : setInputError({ password: '', email: content.message })
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
        helperText={ inputError.email }
        error={ inputError.email }
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
        value={password}
        helperText={ inputError.password }
        error={ inputError.password }
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
