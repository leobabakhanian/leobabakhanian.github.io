import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../Button";
import "./Projects.css";
import appleclone from "../images/apple-clone_2.jpg";
import { Button as MUIButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function AppleClone() {
  return (
    <Container id="project-page">
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
          <h1>Apple Clone</h1>
          <p>A clone of Apple.com built with React.</p>
          <img src={appleclone} alt="" />
        </Col>
      </Row>
      <Row id="second-row">
        <Col xs="auto">
          <a
            href="https://apple-clone-3bf09.web.app/"
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
            href="https://github.com/leobabakhanian/apple-clone"
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
            Notes: This site was designed based on the 10/15/2021 version of
            Apple.com. 10/16/21: Sticky header was removed as it would break the
            production build on the deployed site. <br />
            <br />I challenged myself to recreate the main page of Apple.com in
            this project. I was able to recreate many of the elements precisely
            as they are on the real Apple website. Some aspects were harder to
            create than others, but for the most part everything is exactly like
            the original.
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

export default AppleClone;
