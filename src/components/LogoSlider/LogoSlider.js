import { Container } from "@mui/material";
import React from "react";
import skilllogo from "../assets/logo-slider/git.png";
import jenkins from "../assets/logo-slider/jenkins.png";
import "../css/slider.css";

const LogoSlider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img
            src="https://img.icons8.com/color/96/000000/git.png"
            alt="skill"
          />
        </div>
        <div className="slide">
          <img
            src="https://img.icons8.com/color/96/000000/jenkins.png"
            alt="skill"
          />
        </div>
        <div className="slide">
          <img
            src="https://img.icons8.com/color/96/000000/django.png"
            alt="skill"
          />
        </div>
        <div className="slide">
          <img
            src="https://img.icons8.com/color/96/000000/python--v1.png"
            alt="skill"
          />
        </div>
        <div className="slide">
          <img
            src="https://img.icons8.com/plasticine/100/000000/react.png"
            alt="skill"
          />
        </div>
        <div className="slide">
          <img
            src="https://img.icons8.com/fluency/96/000000/docker.png"
            alt="skill"
          />
        </div>
        <div className="slide">
          <img
            src="https://img.icons8.com/color/96/000000/kubernetes.png"
            alt="skill"
          />
        </div>
        <div className="slide">
          <img
            src="https://img.icons8.com/color/96/000000/terraform.png"
            alt="skill"
          />
        </div>
        <div className="slide">
          <img
            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"
            alt="skill"
          />
        </div>
        <div className="slide">
          <img
            src="https://img.icons8.com/color/96/000000/postgreesql.png"
            alt="skill"
          />
        </div>
        <div className="slide">
          <img
            src="https://img.icons8.com/color/96/000000/amazon-web-services.png"
            alt="skill"
          />
        </div>
        <div className="slide">
          <img
            src="https://img.icons8.com/windows/96/000000/digital-ocean.png"
            alt="skill"
          />
        </div>
        <div className="slide">
          <img
            src="https://img.icons8.com/color/96/000000/ansible.png"
            alt="skill"
          />
        </div>
        <div className="slide">
          <img
            src="https://img.icons8.com/color/96/000000/prometheus-app.png"
            alt="skill"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
