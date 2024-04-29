import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import appleclone from "../images/apple-clone_2.jpg";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "./Buttons.css";

function AppleClone() {
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
					<h1>Apple Clone</h1>
					<p>A clone of Apple.com built with React.</p>
					<img src={appleclone} alt="" />
				</Col>
			</Row>
			<Row id="second-row">
				<Col xs="auto">
					<Button
						variant="outlined"
						disableElevation
						id="live-button"
						href="https://apple-clone-3bf09.web.app/"
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
						href="https://github.com/leobabakhanian/apple-clone"
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
						Technology used: HTML, CSS, JavaScript, Node.js, React, Firebase,
						MUI
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default AppleClone;
