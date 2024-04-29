import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
	Divider,
	Avatar,
	Grid,
	Tooltip,
	IconButton,
	Box,
	Card,
	CardContent,
	Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import USA from "./images/icons/united-states.png";
import LeoAvatar from "./images/icons/avatar.jpg";
import "./ProfileCard.css";

const card = (
	<Card id="card">
		<CardContent>
			<Grid container>
				<Tooltip title="Glendale, CA" placement="right-end">
					<Grid item>
						<Avatar
							alt=""
							src={LeoAvatar}
							sx={{ width: 70, height: 70, borderRadius: 2 }}
							variant="rounded"
						/>
						<img
							src={USA}
							alt=""
							style={{ height: 25, width: 25 }}
							id="card__country"
						/>
					</Grid>
				</Tooltip>
				<Grid item className="profile-right">
					<IconButton
						href="https://github.com/leobabakhanian"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHubIcon sx={{ color: "#f0f2f5" }} />
					</IconButton>
				</Grid>
			</Grid>
			<Typography
				variant="body1"
				component="div"
				sx={{ color: "#f0f2f5", fontWeight: 700 }}
				id="card__name"
			>
				Leo Babakhanian
			</Typography>
			<Divider id="divider" sx={{ color: "#f0f2f5" }} />
			<Typography variant="body2" id="card__contact">
				<a href="mailto:babakhanianleo@gmail.com">babakhanianleo@gmail.com</a>
			</Typography>
		</CardContent>
	</Card>
);

export function ProfileCard() {
	return (
		<Container fluid id="profile">
			<Row className="justify-content-center">
				<Col xs="auto">
					<Box>
						<Card
							variant="outlined"
							style={{
								borderColor: "#282424",
								background: "#121212",
								color: "#f0f2f5",
								borderRadius: 7,
								minWidth: 325,
							}}
						>
							{card}
						</Card>
					</Box>
				</Col>
			</Row>
		</Container>
	);
}
