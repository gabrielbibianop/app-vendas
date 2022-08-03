import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Login } from "./pages/Login/Login";
import { Cadastro } from "./pages/Login/Cadastro";
import { Home } from "./pages/Login/Home/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
