import React from "react";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";
import ProjectList from "./ProjectList";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/project">Project Page</Link>
      </nav>
    </>
  );
};

export default Home;
