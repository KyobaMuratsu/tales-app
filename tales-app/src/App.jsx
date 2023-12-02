import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";
import RequireAuth from "./layout/Components/RequireAuth";
import Profileuser from "./pages/Profileuser";
import UserConfiguration from "./pages/UserConfiguration";

function App() {

    return (
        <Router>
          <Routes>
              <Route path="/" element={<Login/>}/>    
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Feed" element={<Feed/>}/>
              <Route path="/Profile" element={<Profileuser/>}/>
              <Route path="/CreatePost" element={<CreatePost/>}/>
              <Route path="/Config" element={<UserConfiguration/>}/>
          </Routes>
        </Router>
      );

}

export default App