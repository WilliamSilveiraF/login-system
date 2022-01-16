import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Nav } from './components';
import { Home, Login, Register } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
