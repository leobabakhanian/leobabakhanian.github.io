import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import web3_1 from "../images/web3_1.jpg";
import web3_2 from "../images/web3_2.jpg";

function LCrypt() {
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
          <h1>LCrypt</h1>
          <p>A Web 3.0 website that allows users to send & receive Ethereum.</p>
          <img src={web3_1} alt="" className="image-first" />
          <img src={web3_2} alt="" />
        </Col>
      </Row>
      <Row id="second-row">
        <Col xs="auto">
          <Button
            variant="outlined"
            disableElevation
            id="live-button"
            href="https://lcrypt.web.app/"
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
            href="https://github.com/leobabakhanian/web3.0"
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
            This project was my first introduction into Web 3.0 development. I
            learned how to make a smart contract for Ethereum transfers and how
            to connect a user's wallet to a website using MetaMask. I was then
            able to display previous transactions by other users including the
            amount, message, and gif they sent with the transaction.
          </p>
        </Col>
      </Row>
      <Row id="fourth-row">
        <Col>
          <p>
            Technology used: HTML, CSS, JavaScript, React, Solidity, Tailwind
            CSS, GIPHY API, Hardhat, Ropsten Test Network, Alchemy, Firebase
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default LCrypt;
