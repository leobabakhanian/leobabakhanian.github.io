import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import spotifyclone from "../images/spotify-clone_1.jpg";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function SpotifyClone() {
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
					<h1>Spotify Clone</h1>
					<p>A clone of Spotify built with React and Spotify's Web API.</p>
					<img src={spotifyclone} alt="" />
				</Col>
			</Row>
			<Row id="second-row">
				<Col xs="auto">
					<Button
						variant="outlined"
						disableElevation
						id="live-button"
						href="https://spotify-clone-7ee68.web.app/"
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
						href="https://github.com/leobabakhanian/spotify-clone"
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
						Note: The live version is stripped down in order to not reveal my
						own Spotify access token. In this case it uses a dummy token for
						demonstration purposes.
						<br />
						<br />
						This project was done to get myself more familiarized with APIs
						inside of React and to clone something which I use daily. The web
						app uses an authorization token to load in the user's playlists on
						the left and their discover weekly playlist in the main view. The
						play and skip buttons are functional as well.
					</p>
				</Col>
			</Row>
			<Row id="fourth-row">
				<Col>
					<p>
						Technology used: HTML, CSS, JavaScript, Node.js, React, Firebase,
						MUI
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default SpotifyClone;
