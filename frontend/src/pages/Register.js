import React from "react";
import { TextField, Button } from "@mui/material"
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form id='registerForms'>
      <h1>Welcome to <span>willbook</span></h1>
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
      <TextField
        margin="normal"
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="given-username"
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
