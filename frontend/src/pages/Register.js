import React, { useState } from "react";
import { TextField, Button } from "@mui/material"
import { Link, Navigate } from "react-router-dom";
import suite from '../suite'

const Register = () => {
  const [toLogin, setToLogin] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputError, setInputError] = useState({ email: '', password: '', username: ''})
  
  let res;
  const submit = async (e) => {
    e.preventDefault()

    suite({ email, password, username }, "email")
    suite({ email, password, username }, "password")
    suite({ email, password, username }, "username")
    res = suite.get()
    setInputError({ 
      ...inputError, 
      email: res.getErrors('email')[0], 
      password: res.getErrors('password')[0],
      username: res.getErrors('username')[0]
    })

    if (res.errorCount > 0) return

    const response = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: username,
        email,
        password
      })
    })
    const content = await response.json()

    return content.id === 0 ? setInputError({ password: '', username: '', email: 'email already registered' }) : setToLogin(true)
  }
  if (toLogin) {
    return <Navigate to='/' />
  }

  return (
    <form id='registerForms' onSubmit={submit}>
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
        helperText={ inputError.email }
        error={ inputError.email }
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
        helperText={ inputError.password }
        error={ inputError.password }
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
        value={username}
        helperText={ inputError.username }
        error={ inputError.username }
        onChange={e => setUsername(e.target.value)}
      />
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
