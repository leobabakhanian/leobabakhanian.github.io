import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import tictactoe from "./images/tic-tac-toe_1.jpg";
import matapals from "./images/under-construction.jpg";
import appleclone from "./images/apple-clone_1.jpg";
import transfermarket from "./images/transfermarket_2.jpg";
import spotifyclone from "./images/spotify-clone_2.jpg";
import googleclone from "./images/google-clone_1.jpg";
import "./ProjectCards.css";

const theme = createTheme();

export default function ProjectCards() {
  return (
    <div className="projects-container">
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
                  <Link to="/leobabakhanian.github.io/matapals">
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
                    <Link to="/leobabakhanian.github.io/matapals" id="view">
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
                  <Link to="/leobabakhanian.github.io/tic-tac-toe">
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
                    <Link to="/leobabakhanian.github.io/tic-tac-toe" id="view">
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
                  <Link to="/leobabakhanian.github.io/transfermarket">
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
                    <Link
                      to="/leobabakhanian.github.io/transfermarket"
                      id="view"
                    >
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
                  <Link to="/leobabakhanian.github.io/apple-clone">
                    <CardMedia
                      component="img"
                      sx={{
                        minHeight: 175,
                        maxHeight: 175,
                      }}
                      image={appleclone}
                      alt=""
                    />
                  </Link>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Apple Clone
                    </Typography>
                    <Typography>
                      A clone of Apple.com built with React.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/leobabakhanian.github.io/apple-clone" id="view">
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
                  <Link to="/leobabakhanian.github.io/spotify-clone">
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
                  <Link to="/leobabakhanian.github.io/google-clone">
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
