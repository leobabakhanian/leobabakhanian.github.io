import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import matapals from "../images/matapals_2.jpg";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "./Buttons.css";

function MataPals() {
  return (
    <Container id="project-page">
      <Row>
        <Col xs="auto">
          <Link to="/projects" id="back">
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
          <h1>MataPals (In progress)</h1>
          <p>A web app for CSUN students to connect with each other.</p>
          <img src={matapals} alt="" />
        </Col>
      </Row>
      <Row id="second-row">
        <Col xs="auto">
          <Button
            variant="outlined"
            disableElevation
            id="live-button"
            href="https://matapals-addingevent--bagdadm6516.repl.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LIVE CODE
          </Button>
        </Col>
      </Row>
      <Row id="third-row">
        <Col>
          <p>
            This project was accomplished with a team of six students, including
            myself, for our senior year Capstone Project.
            <br />
            <br />
            MataPals is a social media app involving on-campus groups and events
            at California State University Northridge. The MataPals app allows
            users to find and connect with other students using a matching
            algorithm based on interests and classes.
          </p>
        </Col>
      </Row>
      <Row id="fourth-row">
        <Col>
          <p>
            Technology used: HTML, BootStrap, AJAX, MongoDB, Repil, Express,
            Bcrypt, JWT
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MataPals;
