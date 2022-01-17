import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Logo } from './components';
import { Login, Register } from './pages'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Logo />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
