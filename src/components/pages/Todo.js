import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import todo from "../images/todo_1.jpg";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function Todo() {
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
								backgroundColor: "#282424",
							}}
						>
							BACK
						</Button>
					</Link>
				</Col>
			</Row>
			<Row className="justify-content-center" id="first-row">
				<Col>
					<h1>To-Do List</h1>
					<p>
						A full stack MERN application that allows users to create tasks,
						complete them, edit them, and delete them.
					</p>
					<img src={todo} alt="" />
				</Col>
			</Row>
			<Row id="second-row">
				<Col xs="auto">
					<Button
						variant="outlined"
						disableElevation
						id="live-button"
						href="https://to-do-list-ebad1.web.app/"
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
						href="https://github.com/leobabakhanian/to-do-list"
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
						This is the second time I used the MERN stack to create web app. I
						implemented a login system with JWT which allows users to sign in
						and create tasks for their to-do list. Users can only see their own
						tasks and can edit, delete, or complete the tasks they have created.
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

export default Todo;
