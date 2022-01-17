import React, { useState } from "react";
import { TextField, Button } from "@mui/material"
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  const [toLogin, setToLogin] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disclaimer, setDisclaimer] = useState('')

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
    return content.id === 0 ? setDisclaimer('email already registered') : setToLogin(true)
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
      <h5>{ disclaimer }</h5>
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
