import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";
import "../css/home.css";
// import ProjectList from "./ProjectList";

const Home = () => {
  return (
    <>
      <Header />
      <LandingPage />
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
