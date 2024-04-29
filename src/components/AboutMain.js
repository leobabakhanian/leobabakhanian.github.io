import React from "react";
import "./AboutMain.css";
import { Container, Row, Col } from "react-bootstrap";
import { ProfileCard } from "./ProfileCard";

function AboutMain() {
	return (
		<>
			<Container id="about-main">
				<Row className="justify-content-center">
					<Col xs="auto">
						<p id="greeting">
							Hello! I'm a full stack developer based in Glendale, CA.
						</p>
					</Col>
				</Row>
			</Container>
			<Container>
				<ProfileCard />
			</Container>
			<Container id="about-bio">
				<Row>
					<Col xs="auto">
						<h4 id="bio-head">Bio</h4>
					</Col>
				</Row>
				<Row id="bio-first">
					<Col xs="auto">
						<h5>
							<span id="bio-date">1998</span> Born in Burbank, CA
						</h5>
					</Col>
				</Row>
				<Row>
					<Col xs="auto">
						<h5>
							<span id="bio-date">2016</span> Earned high school diploma at
							Clark Magnet HS
						</h5>
					</Col>
				</Row>
				<Row>
					<Col xs="auto">
						<h5>
							<span id="bio-date">2022</span> Completed Bachelor's Degree in
							Computer Science at Cal State Northridge
						</h5>
					</Col>
				</Row>
				<Row>
					<Col xs="auto">
						<h5>
							<span id="bio-date">Present</span> Working on personal projects
							and looking for next role
						</h5>
					</Col>
				</Row>
			</Container>
			<Container className="about-hobbies" id="about-bio">
				<Row>
					<Col xs="auto">
						<h4 id="bio-head">I ♥</h4>
					</Col>
				</Row>
				<Row>
					<Col xs="auto">
						<h5>Football ⚽, Music 🎵, Cryptocurrency ₿, Movies 📽️</h5>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default AboutMain;
