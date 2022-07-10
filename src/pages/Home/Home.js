import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Layouts/Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import "./home.css";
import LogoSlider from "../../components/LogoSlider/LogoSlider";
import ProjectList from "../../components/Project/ProjectList";

const Home = () => {
  return (
    <>
      <Header />
      <LandingPage />
      <LogoSlider />
      <ProjectList />
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
