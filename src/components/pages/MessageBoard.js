import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import messageBoard from "../images/message-board_2.jpg";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "./Buttons.css";

function MessageBoard() {
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
          <h1>Message Board</h1>
          <p>
            A full stack MERN application that allows users to make posts to a
            community message board.
          </p>
          <img src={messageBoard} alt="" />
        </Col>
      </Row>
      <Row id="second-row">
        <Col xs="auto">
          <Button
            variant="outlined"
            disableElevation
            id="live-button"
            href="https://message-board-7ecff.web.app/"
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
            href="https://github.com/leobabakhanian/message-board"
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
            In this project, I aimed to learn how to make a full stack MERN web
            app. I used React to make the front end and MongoDB as the connected
            database. I then created an intuitive UI with Material UI and built
            features such as creating, liking, editing, and deleting posts. I
            then built a login system in order to allow users to only
            edit/delete their own posts and not allow users to like a post more
            than once.
          </p>
        </Col>
      </Row>
      <Row id="fourth-row">
        <Col>
          <p>
            Technology used: HTML, CSS, JavaScript, NPM, Express, React,
            MongoDB, Firebase, Heroku, MUI, JWT, bcrypt
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MessageBoard;
