import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./layout/User/Profile/Profile";

import './style/App.css';

function App() {

    return (     
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>      
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
      );

}

export default App;