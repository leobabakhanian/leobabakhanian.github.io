import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../Button";
import "./Projects.css";
import googleclone from "../images/google-clone_2.jpg";
import { Button as MUIButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function GoogleClone() {
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
          <h1>Google Clone</h1>
          <p>
            A clone of the Google search engine built with React and Google
            Search API.
          </p>
          <img src={googleclone} alt="" />
        </Col>
      </Row>
      <Row id="second-row">
        <Col xs="auto">
          <a
            href="https://clone-ac992.web.app/"
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
            href="https://github.com/leobabakhanian/spotify-clone"
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
            Designed based on the current Google layout in October 2021.
            <br />
            <br />
            In this project, I built a functional clone of the classic
            Google.com search engine. Users can search for anything and will be
            greeted with the corresponding results using the Google Search API.
            I also got my first introduction to Firebase and deploying a live
            version of my product.
          </p>
        </Col>
      </Row>
      <Row id="fourth-row">
        <Col>
          <p>
            Technology used: HTML, CSS, JavaScript, NPM, React, Firebase, MUI
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default GoogleClone;
