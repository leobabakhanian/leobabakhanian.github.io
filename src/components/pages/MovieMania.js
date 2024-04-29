import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "./Buttons.css";
import moviemania from "../images/movie-mania_2.jpg";

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
					<h1>Movie Mania</h1>
					<p>
						A full stack MERN web app that allows lovers of movies and shows to
						connect with each other. Users can also search for their favorite
						movies and view our personal lists!
					</p>
					<img src={moviemania} alt="" />
				</Col>
			</Row>
			<Row id="second-row">
				<Col xs="auto">
					<Button
						variant="outlined"
						disableElevation
						id="live-button"
						href="https://movie-mania-584.web.app/"
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
						href="https://github.com/leobabakhanian/movie-mania"
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
						In this project, I applied my knowledge of the MERN stack to
						recreate the login/registration system from previous projects and
						apply it to a site for movie lovers. I also utilized the OMDb API
						for movies/shows to create a search for users to look through their
						favorites and see detailed information on them. My friend and I also
						created a page for our list of our favorite movies and shows with
						ratings pulled from IMDb which are displayed in custom cards.
					</p>
				</Col>
			</Row>
			<Row id="fourth-row">
				<Col>
					<p>
						Technology used: HTML, CSS, JavaScript, NPM, Express, React,
						MongoDB, Firebase, Heroku, MUI, JWT, bcrypt, OMDb API
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default MessageBoard;
