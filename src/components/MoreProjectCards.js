import React from "react";
import "./MoreProjectCards.css";
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
import loginsystem from "./images/login_1.jpg";
import calculator from "./images/calculator_1.jpg";

const theme = createTheme();

function MoreProjectCards() {
  return (
    <div className="moreProjects-container">
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
                  <Link to="/login-system">
                    <CardMedia
                      component="img"
                      sx={{
                        minHeight: 175,
                        maxHeight: 175,
                      }}
                      image={loginsystem}
                      alt=""
                    />
                  </Link>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      PHP Login System
                    </Typography>
                    <Typography>
                      A basic login system that utilizes the LAMP stack. Users
                      can register/log in and the admin can view all users in
                      the database.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/login-system" id="view">
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
                  <Link to="/scientific-calculator">
                    <CardMedia
                      component="img"
                      sx={{
                        minHeight: 175,
                        maxHeight: 175,
                      }}
                      image={calculator}
                      alt=""
                    />
                  </Link>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Scientific Calculator
                    </Typography>
                    <Typography>
                      A basic scientific calculator with a clean UI.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/scientific-calculator" id="view">
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

export default MoreProjectCards;
