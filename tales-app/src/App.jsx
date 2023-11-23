import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";
import RequireAuth from "./layout/Components/RequireAuth";

function App() {

    return (
        <Router>
          <Routes>
              <Route path="/" element={<Login/>}/>    
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Feed" element={<Feed/>}/>
              <Route path="/CreatePost" element={<CreatePost/>}/>
          </Routes>
        </Router>
      );

}

export default App