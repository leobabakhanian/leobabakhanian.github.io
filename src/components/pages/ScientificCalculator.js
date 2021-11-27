import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../Button";
import "./Projects.css";
import calculator from "../images/calculator_2.jpg";
import { Button as MUIButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function ScientificCalculator() {
  return (
    <Container id="project-page">
      <Row>
        <Col xs="auto">
          <Link to="/more" id="back">
            <MUIButton
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
            </MUIButton>
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
          <a
            href="https://scientific-calculator-ceda5.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              id="button-first"
            >
              LIVE CODE
            </Button>
          </a>
        </Col>
        <Col xs="auto">
          <a
            href="https://github.com/leobabakhanian/scientific-calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              GITHUB LINK
            </Button>
          </a>
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
