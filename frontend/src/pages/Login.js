import React from "react";
import { TextField, Button } from "@mui/material"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form id='loginForms'>
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
      />
      <TextField
        margin="normal"
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
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
