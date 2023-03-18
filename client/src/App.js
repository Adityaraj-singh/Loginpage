import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

import Login from "./Components/Login/Login";
import Sign from "./Components/Signup/SIgnup";
import {
  BrowserRouter,
  Route,
  Routes,
  createRoutesFromElements,
} from "react-router-dom";
import Signup from "./Components/Signup/SIgnup";
import SignUp from "./Components/Signup/SIgnup";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div className="App" style={{ overflowY: "hidden" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route index path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
