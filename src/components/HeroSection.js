import React from "react";
import "../App.css";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import "./pages/Buttons.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted playsInline />
      <div className="typewriter">
        <h1>Hey, my name is Leo.</h1>
      </div>
      <p>Check out my work.</p>
      <div className="hero-btns">
        <Button
          variant="outlined"
          disableElevation
          id="live-button"
          component={Link}
          to={{
            pathname: "projects",
          }}
          style={{ marginRight: "1rem" }}
        >
          PROJECTS
        </Button>
        <Button
          startIcon={<GitHubIcon />}
          variant="outlined"
          disableElevation
          id="git-button"
          href="https://github.com/leobabakhanian"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
