import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import login1 from "../images/login_2.jpg";
import login2 from "../images/login_3.jpg";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function LoginSystem() {
	return (
		<Container id="project-page">
			<Row>
				<Col xs="auto">
					<Link to="/more" id="back">
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
					<h1>Login System</h1>
					<p>A basic login system using PHP and MySQL.</p>
					<img src={login1} alt="" className="image-first" />
					<img src={login2} alt="" />
				</Col>
			</Row>
			<Row id="second-row">
				<Col xs="auto">
					<Button
						variant="outlined"
						disableElevation
						id="git-button"
						href="https://github.com/leobabakhanian/LoginSystem"
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
						This project was to introduce myself to PHP, phpMyAdmin, and MySQL.
						I learned how to create a basic login system and connect it to a
						database with auto-incrementation. This system is very basic so it
						does not check for MySQL injection or invalid characters, but it
						does check for duplicate users and other basic errors such as
						incorrect passwords. Once the user is logged in, a welcome message
						is displayed and they can change the background color of the page to
						a random color with the click of a button. There is also an admin
						account that the user can create using the username "Admin" and the
						password "password" (not case sensitive) which, when logged in with,
						will allow the user to see all of the username/password combinations
						of users they have registered.
					</p>
				</Col>
			</Row>
			<Row id="fourth-row">
				<Col>
					<p>
						Technology used: HTML, CSS, JavaScript, Linux, Apache, MySQL, PHP
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default LoginSystem;
