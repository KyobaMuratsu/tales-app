import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import RequireAuth from "./layout/Components/RequireAuth";

import './style/App.css';

function App() {

    return (
        <Router>
          <Routes>
              <Route path="/" element={<Login/>}/>    
              <Route path="/Register" element={<Register/>}/>
            
              {/* Rotas protegidas */}
              <Route element={<RequireAuth/>}>
                <Route path="/Feed" element={<Feed/>}/>
              </Route>
          </Routes>
        </Router>
      );

}

export default App