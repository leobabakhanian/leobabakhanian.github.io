import React from "react";
import "./Header.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "./images/logo-wide.png";
import pdf from "./resume/Resume.pdf";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header">
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				sticky="top"
				id="navbar"
			>
				<Container>
					<Navbar.Brand href="/">
						<img
							src={logo}
							width="60"
							height="30"
							className="d-inline-block align-top"
							alt=""
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<Nav.Link>
								<Link to="/projects" id="nav-btn">
									Projects
								</Link>
							</Nav.Link>
							<Nav.Link className="nav-link">
								<Link to="/more" id="nav-btn">
									More
								</Link>
							</Nav.Link>
							<Nav.Link className="nav-link">
								<Link to="/about" id="nav-btn">
									About
								</Link>
							</Nav.Link>
							<Nav.Link className="nav-link" id="nav-btn" href={pdf}>
								Resume
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
