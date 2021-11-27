import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import tictactoe1 from "../images/tic-tac-toe_2.jpg";
import tictactoe2 from "../images/tic-tac-toe_3.jpg";
import { Button } from "../Button";
import { Button as MUIButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "./Projects.css";

function TicTacToe() {
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
          <img src={tictactoe1} alt="" className="image-first" />
          <img src={tictactoe2} alt="" />
        </Col>
      </Row>
      <Row id="second-row">
        <Col xs="auto">
          <a
            href="https://github.com/leobabakhanian/TicTacToeGUI"
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
            This project involved creating the classic game of tic-tac-toe with
            a visually appealing UI and set of themes. The user can select a
            theme from the four: an ice cream theme, space theme, beach theme,
            or nature theme. The tic-tac-toe game also features a scoreboard and
            various sounds that play depending on the buttons clicked or outcome
            of the games. The game can be played against another user on the
            same machine or against the computer. In the "vs player" mode, the
            order of play is determined by a random coin flip on the first turn
            and the turns are then alternated.
          </p>
        </Col>
      </Row>
      <Row id="fourth-row">
        <Col>
          <p>Technology used: Java, JavaFX</p>
        </Col>
      </Row>
    </Container>
  );
}

export default TicTacToe;
