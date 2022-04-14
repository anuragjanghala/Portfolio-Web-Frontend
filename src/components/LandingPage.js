import { Container, Typography } from "@mui/material";
import React from "react";
import bg_img from "../assets/bg-img.jpg";

const LandingPage = () => {
  return (
    <div
      style={{
        margin: 0,
        backgroundImage: `url(${bg_img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div id="overlay">
        <Container maxWidth="xl">
          <Typography id="overlay-title">Anurag Janghala</Typography>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
