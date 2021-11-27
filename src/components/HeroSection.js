import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted playsInline />
      <div className="typewriter">
        <h1>Hey, my name is Leo.</h1>
      </div>
      <p>Check out my work.</p>
      <div className="hero-btns">
        <Link to="/projects">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            PROJECTS
          </Button>
        </Link>
        <a
          href="https://github.com/leobabakhanian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            <GitHubIcon id="github" /> GITHUB
          </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
