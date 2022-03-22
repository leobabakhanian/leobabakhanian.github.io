import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import calculator from "../images/calculator_2.jpg";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function ScientificCalculator() {
  return (
    <Container id="project-page">
      <Row>
        <Col xs="auto">
          <Link to="/more" id="back">
            <Button
              variant="contained"
              disableElevation
              startIcon={<ArrowBackIcon />}
              style={{
                fontSize: "15px",
                fontWeight: "700",
                backgroundColor: "#8f8f8f",
              }}
            >
              BACK
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center" id="first-row">
        <Col>
          <h1>Scientific Calculator</h1>
          <p>A simple scientific calculator web application.</p>
          <img src={calculator} alt="" />
        </Col>
      </Row>
      <Row id="second-row">
        <Col xs="auto">
          <Button
            variant="outlined"
            disableElevation
            id="live-button"
            href="https://scientific-calculator-ceda5.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LIVE CODE
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            variant="outlined"
            disableElevation
            id="git-button"
            href="https://github.com/leobabakhanian/scientific-calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB LINK
          </Button>
        </Col>
      </Row>
      <Row id="third-row">
        <Col>
          <p>
            This project is a short and simple scientific calculator in the form
            of a web app. Users can calculate anything from basic arithmetic to
            trigonometric functions.
          </p>
        </Col>
      </Row>
      <Row id="fourth-row">
        <Col>
          <p>Technology used: HTML, CSS, JavaScript</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ScientificCalculator;
