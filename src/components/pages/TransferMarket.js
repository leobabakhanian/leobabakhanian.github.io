import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import transfermarket from "../images/transfermarket_1.jpg";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function TransferMarket() {
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
					<h1>TransferMarket</h1>
					<p>
						A scraper designed for transfermarkt.com. Allows users to choose
						their favorite players and store custom player cards.
					</p>
					<img src={transfermarket} alt="" />
				</Col>
			</Row>
			<Row id="second-row">
				<Col xs="auto">
					<Button
						variant="outlined"
						disableElevation
						id="git-button"
						href="https://github.com/leobabakhanian/TransferMarket"
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
						This project is intended to be a very basic scraper of
						transfermarkt.com. When users enter a player page from
						transfermarkt, they will be able to get custom cards displaying some
						information about each player.
					</p>
				</Col>
			</Row>
			<Row id="fourth-row">
				<Col>
					<p>
						Technology used: HTML, CSS, JavaScript, Node.js, Express, MySQL,
						Puppeteer
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default TransferMarket;
