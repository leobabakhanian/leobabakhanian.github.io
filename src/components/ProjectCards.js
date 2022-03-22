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
import spotifyclone from "./images/spotify-clone_2.jpg";
import googleclone from "./images/google-clone_1.jpg";
import messageBoard from "./images/message-board_1.jpg";
import phoenixpoint from "./images/phoenixpoint_2.jpg";
import todo from "./images/todo_1.jpg";
import "./ProjectCards.css";
import web3 from "./images/web3_1.jpg";

const theme = createTheme();

export default function ProjectCards() {
  return (
    <div className="projects-container">
      <ThemeProvider theme={theme}>
        <main>
          <Container sx={{ py: 8 }}>
            <Grid container spacing={4}>
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
                  <Link to="/tic-tac-toe">
                    <CardMedia
                      component="img"
                      sx={{
                        minHeight: 175,
                        maxHeight: 175,
                      }}
                      image={tictactoe}
                      alt=""
                    />
                  </Link>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Tic-Tac-Toe
                    </Typography>
                    <Typography>
                      The classic game of tic-tac-toe with my own twist of
                      themes and visual UI. Challenge your friend or the
                      computer!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/tic-tac-toe" id="view">
                      <Button size="small">View</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
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
                  <Link to="/message-board">
                    <CardMedia
                      component="img"
                      sx={{
                        minHeight: 175,
                        maxHeight: 175,
                      }}
                      image={messageBoard}
                      alt=""
                    />
                  </Link>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Message Board
                    </Typography>
                    <Typography>
                      A full stack MERN web application that allows users to
                      post messages to a board and interact with them.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/message-board" id="view">
                      <Button size="small">View</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
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
                  <Link to="/phoenix-point">
                    <CardMedia
                      component="img"
                      sx={{
                        minHeight: 175,
                        maxHeight: 175,
                      }}
                      image={phoenixpoint}
                      alt=""
                    />
                  </Link>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Phoenix Point
                    </Typography>
                    <Typography>
                      An image processing application made with JavaFX.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/phoenix-point" id="view">
                      <Button size="small">View</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
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
                  <Link to="/transfermarket">
                    <CardMedia
                      component="img"
                      sx={{
                        minHeight: 175,
                        maxHeight: 175,
                      }}
                      image={transfermarket}
                      alt=""
                    />
                  </Link>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      TransferMarket
                    </Typography>
                    <Typography>
                      A scraper using links from transfermarkt.com. Generate
                      player cards with name, value, and more!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/transfermarket" id="view">
                      <Button size="small">View</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
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
                  <Link to="/matapals">
                    <CardMedia
                      component="img"
                      sx={{
                        minHeight: 175,
                        maxHeight: 175,
                      }}
                      image={matapals}
                      alt=""
                    />
                  </Link>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      MataPals
                    </Typography>
                    <Typography>
                      A web app that connects CSUN students together through
                      shared interests and classes.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/matapals" id="view">
                      <Button size="small">View</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
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
                  <Link to="/lcrypt">
                    <CardMedia
                      component="img"
                      sx={{
                        minHeight: 175,
                        maxHeight: 175,
                      }}
                      image={web3}
                      alt=""
                    />
                  </Link>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      LCrypt
                    </Typography>
                    <Typography>
                      A Web 3.0 website that allows users to connect their
                      MetaMask wallet, send Ethereum, and view recent
                      transactions from other addresses.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/lcrypt" id="view">
                      <Button size="small">View</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
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
                  <Link to="/to-do-list">
                    <CardMedia
                      component="img"
                      sx={{
                        minHeight: 175,
                        maxHeight: 175,
                      }}
                      image={todo}
                      alt=""
                    />
                  </Link>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      To-do List
                    </Typography>
                    <Typography>
                      A full stack MERN web app with a to-do list that has three
                      features and a login system for users.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="to-do-list" id="view">
                      <Button size="small">View</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
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
                  <Link to="/spotify-clone">
                    <CardMedia
                      component="img"
                      sx={{
                        minHeight: 175,
                        maxHeight: 175,
                      }}
                      image={spotifyclone}
                      alt=""
                    />
                  </Link>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Spotify Clone
                    </Typography>
                    <Typography>
                      A clone of the web app version of Spotify using an auth
                      token and Spotify's API.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="spotify-clone" id="view">
                      <Button size="small">View</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
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
                  <Link to="/google-clone">
                    <CardMedia
                      component="img"
                      sx={{
                        minHeight: 175,
                        maxHeight: 175,
                      }}
                      image={googleclone}
                      alt=""
                    />
                  </Link>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Google Clone
                    </Typography>
                    <Typography>
                      A clone of the classic Google.com search engine with
                      search functionality using Google Search API.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="google-clone" id="view">
                      <Button size="small">View</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}
