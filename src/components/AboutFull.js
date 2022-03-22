import React from "react";
import AboutMain from "./AboutMain";
import CustomizedList from "./CustomizedList";
import "./AboutFull.css";

function AboutFull() {
  return (
    <div className="about-full">
      <AboutMain />
      <CustomizedList />
    </div>
  );
}

export default AboutFull;
