import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import { ACCESS_TOKEN } from "./layout/Constants";
import { getCurrentUser } from "./api/APIItils";

import './style/App.css';
import Feed from "./pages/Feed";

function App() {
  const infoDefault = {
      authenticated: false,
      currentUser: null,
      loading: true
};

const [info, setInfo] = useState(infoDefault)

function loadCurrentlyLoggedUser(){
  getCurrentUser().then((response) => {
      setInfo({
          ...info,
          currentUser: response,
          authenticated: true,
          loading: false
      })
      console.log(infoDefault);
  }).catch(error => {
      setInfo({
          ...info,
          loading: false
      });
  });
}

function handleLogout() {
  localStorage.removeItem(ACCESS_TOKEN);
  setInfo({
      currentUser: null,
      authenticated: false
  });
  console.log("Funcionou!")
}

    return (
        <Router>
          <Routes>
              <Route path="/" element={<Login/>}/>    
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Feed" element={<Feed/>}/>
          </Routes>
        </Router>
      );

}

export default App