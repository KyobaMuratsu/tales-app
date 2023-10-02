import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/App.css';
import Login from "./pages/Login";

function App(){ 
    return (
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>}>
              
              </Route>
          </Routes>
        </BrowserRouter>
      );
}

export default App