import React from "react";
import "./AboutMain.css";
import { Container, Row, Col } from "react-bootstrap";

function AboutMain() {
  return (
    <Container id="about-main">
      <Row className="justify-content-center">
        <Col xs="auto">
          <p>
            Hi, my name is Leo Babakhanian. I am 23-year-old Armenian-American
            developer and I hold a Bachelor's Degree in Computer Science. From
            an early age, I have always been passionate about technology and I
            became obssessed with programming during high school. I began with
            modding my video games on my computer and slowly began learning bits
            of Java and C++. Today, I pour hours of my time daily to learn
            technologies such as React and harden my data structure skills on
            websites such as leetcode.com. As I progress through this journey, I
            pride myself on being able to quickly pick up and adapt to new
            languages and skills.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMain;
