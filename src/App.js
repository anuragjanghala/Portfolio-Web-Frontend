import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProjectPage from "./components/ProjectPage";
import Home from "./components/Home";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
