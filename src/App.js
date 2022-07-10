import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProjectPage from "./components/Project/ProjectPage";
import Home from "./pages/Home/Home";
import Login from "./Auth/Login/Login";
import Logout from "./Auth/Logout/Logout";

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
