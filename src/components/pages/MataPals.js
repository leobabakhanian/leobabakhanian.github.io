import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../Button";
import "./Projects.css";
import matapals from "../images/under-construction.jpg";
import { Button as MUIButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function MataPals() {
  return (
    <Container id="transfer-market">
      <Row>
        <Col xs="auto">
          <Link to="/projects" id="back">
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
          <h1>Tic-Tac-Toe Game</h1>
          <p>A tic-tac-toe game with four themes and two game modes.</p>
          <img src={matapals} alt="" />
        </Col>
      </Row>
      <Row id="second-row">
        <Col xs="auto">
          <a
            href="https://matapal.web.app/"
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
            href="https://github.com/leobabakhanian/matapals"
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
            This project was accomplished with a team of five other students.
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
          <p>Technology used: TBD</p>
        </Col>
      </Row>
    </Container>
  );
}

export default MataPals;
