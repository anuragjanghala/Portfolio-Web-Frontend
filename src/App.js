import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProjectPage from "./components/ProjectPage";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project" element={<ProjectPage />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
