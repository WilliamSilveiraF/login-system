import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './styles'
import { Logo } from './components';
import { Home, Login, Register } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Logo />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
