import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import tictactoe from "./images/tic-tac-toe_1.jpg";
import matapals from "./images/matapals_1.jpg";
import transfermarket from "./images/transfermarket_2.jpg";
import spotifyClone from "./images/spotify-clone_2.jpg";
import messageBoard from "./images/message-board_1.jpg";
import phoenixPoint from "./images/phoenixpoint_2.jpg";
import todo from "./images/todo_1.jpg";
import "./ProjectCards.css";
import web3 from "./images/web3_1.jpg";
import movieMania from "./images/movie-mania_1.jpg";

const theme = createTheme();
const projects = [
	{
		img: tictactoe,
		title: "Tic-Tac-Toe",
		desc: "The classic game of tic-tac-toe with my own twist of themes and visual UI. Challenge your friend or the computer!",
		link: "tic-tac-toe",
	},
	{
		img: movieMania,
		title: "Movie Mania",
		desc: "A forum for film and show lovers. Search for and chat with others about your favorite movies & shows!",
		link: "movie-mania",
	},
	{
		img: transfermarket,
		title: "TransferMarket",
		desc: "A scraper using links from transfermarkt.com. Generate player cards with name, value, and more!",
		link: "transfermarket",
	},
	{
		img: phoenixPoint,
		title: "Phoenix Point",
		desc: "An image processing application made with JavaFX.",
		link: "phoenix-point",
	},
	{
		img: matapals,
		title: "MataPals",
		desc: "A web app that connects CSUN students together through shared interests and classes.",
		link: "matapals",
	},
	{
		img: web3,
		title: "LCrypt",
		desc: "A Web 3.0 website that allows users to connect their MetaMask wallet, send Ethereum, and view recent transactions from other addresses.",
		link: "lcrypt",
	},
	{
		img: todo,
		title: "To-do List",
		desc: "A full stack MERN web app with a to-do list that has three features and a login system for users.",
		link: "to-do-list",
	},
	{
		img: spotifyClone,
		title: "Spotify Clone",
		desc: "A clone of the web app version of Spotify using an auth token and Spotify's API.",
		link: "spotify-clone",
	},
	{
		img: messageBoard,
		title: "Message Board",
		desc: "A full stack MERN web application that allows users to post messages to a board and interact with them.",
		link: "message-board",
	},
];

export default function ProjectCards() {
	return (
		<div className="projects-container">
			<ThemeProvider theme={theme}>
				<main>
					<Container sx={{ py: 8 }}>
						<Grid container spacing={4}>
							{projects.map((item, index) => (
								<Grid item xs={12} sm={6} md={4}>
									<Card
										sx={{
											height: "100%",
											display: "flex",
											flexDirection: "column",
											background: "#282424",
											color: "#f0f2f5",
										}}
									>
										<Link to={`/${item.link}`}>
											<CardMedia
												component="img"
												sx={{
													minHeight: 175,
													maxHeight: 175,
												}}
												image={item.img}
												alt=""
											/>
										</Link>
										<CardContent sx={{ flexGrow: 1 }}>
											<Typography gutterBottom variant="h5" component="h2">
												{item.title}
											</Typography>
											<Typography>{item.desc}</Typography>
										</CardContent>
										<CardActions>
											<Link to={item.link} id="view">
												<Button size="small">View</Button>
											</Link>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</Container>
				</main>
			</ThemeProvider>
		</div>
	);
}
