import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import phoenixpoint1 from "../images/phoenixpoint_1.jpg";
import phoenixpoint2 from "../images/phoenixpoint_3.jpg";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "./Projects.css";

function PhoenixPoint() {
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
					<h1>Phoenix Point</h1>
					<p>
						A multimedia program that allows users to apply transormations and
						filters to images.
					</p>
					<img src={phoenixpoint1} alt="" className="image-first" />
					<img src={phoenixpoint2} alt="" />
				</Col>
			</Row>
			<Row id="second-row">
				<Col xs="auto">
					<Button
						variant="outlined"
						disableElevation
						style={{
							fontSize: "18px",
							fontWeight: "700",
							backgroundColor: "transparent",
							color: "#fff",
							padding: "12px 16px",
							fontWeight: "500",
							borderColor: "#fff",
						}}
						href="https://github.com/leobabakhanian/phoenix-point"
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
						In this project, I created a multimedia program using Java that
						allows users to alter an image in various ways. Users can crop,
						flip, and apply filters that change the RGB values of an image to
						achieve the corresponding effect. From this, I learned how such
						filters and transformations are made from scratch using multimedia
						algorithms instead of using a built-in function from an existing
						library.
					</p>
				</Col>
			</Row>
			<Row id="fourth-row">
				<Col>
					<p>Technology used: Java, JavaFX, Swing</p>
				</Col>
			</Row>
		</Container>
	);
}

export default PhoenixPoint;
