import React from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material"
import { Link } from "react-router-dom";


const RegisterForms = styled.form`
  & > * {
    line-height: 1rem;
  }
  & > h1 {
    & > span {
      color: #4267B2;
    }
    font-size: 2rem;
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

const Register = () => {
  return (
    <RegisterForms>
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
    </RegisterForms>
  );
}

export default Register
