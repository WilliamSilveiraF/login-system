import React from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material"

const LoginForms = styled.form`
  & > * {
    line-height: 1rem;
  }
  & > h1 {
    color: #4267B2;
    font-size: 2rem;
  }
  & > p {
    color: #4267B2;
    font-size: 1.5rem;
  }
  & > button {
    background: #4267B2;
  }
  & > h6 {
    font-weight: 400;
    font-size: 1.05rem;
    text-align: right;
    & > a {
      font-weight: 500;
      text-decoration: none;
      color: #4267B2;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`

const Login = () => {
  return (
    <LoginForms>
      <h1>Hi :D</h1>
      <p>Welcome back!</p>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3 }}
      >
        Sign In
      </Button>
      <h6>Don't have an account? <a href="/register">Register</a></h6>
    </LoginForms>
  );
}

export default Login
