import * as React from "react";
import "./CustomizedList.css";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Container, Row, Col } from "react-bootstrap";
import Java from "./images/icons/java.png";
import C from "./images/icons/c.png";
import JS from "./images/icons/javascript.png";
import Cpp from "./images/icons/c++.png";
import CSS from "./images/icons/css.png";
import HTMLIcon from "./images/icons/html.png";
import PHP from "./images/icons/php.png";
import github from "./images/icons/github.png";
import gitlab from "./images/icons/gitlab.png";
import mysql from "./images/icons/mysql.png";
import phpmyadmin from "./images/icons/phpmyadmin.png";
import node from "./images/icons/node.png";
import react from "./images/icons/react.png";
import express from "./images/icons/express.png";
import heroku from "./images/icons/heroku.png";
import mongodb from "./images/icons/mongodb.png";
import firebase from "./images/icons/firebase.png";
import prolog from "./images/icons/prolog.png";
import python from "./images/icons/python.png";

const data1 = [
  { icon: <img src={Java} height={25} width={25} />, label: "Java" },
  { icon: <img src={JS} height={25} width={25} />, label: "JavaScript" },
  { icon: <img src={C} height={25} width={25} />, label: "C" },
  { icon: <img src={Cpp} height={25} width={25} />, label: "C++" },
  { icon: <img src={HTMLIcon} height={25} width={25} />, label: "HTML" },
  { icon: <img src={CSS} height={25} width={25} />, label: "CSS" },
  { icon: <img src={PHP} height={25} width={25} />, label: "PHP" },
  { icon: <img src={python} height={25} width={25} />, label: "Python" },
  { icon: <img src={prolog} height={25} width={25} />, label: "Prolog" },
];

const data2 = [
  { icon: <img src={Java} height={25} width={25} />, label: "JavaFX" },
  { icon: <img src={github} height={25} width={25} />, label: "GitHub" },
  /*{ icon: <img src={gitlab} height={25} width={25} />, label: "GitLab" },*/
  { icon: <img src={mysql} height={25} width={25} />, label: "MySQL" },
  {
    icon: <img src={phpmyadmin} height={25} width={25} />,
    label: "phpMyAdmin",
  },
  { icon: <img src={node} height={25} width={25} />, label: "Node" },
  { icon: <img src={express} height={25} width={25} />, label: "Express" },
  { icon: <img src={react} height={25} width={25} />, label: "React" },
  { icon: <img src={heroku} height={25} width={25} />, label: "Heroku" },
  { icon: <img src={mongodb} height={25} width={25} />, label: "MongoDB" },
  { icon: <img src={firebase} height={25} width={25} />, label: "Firebase" },
];

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function CustomizedList() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <Container fluid id="customized-list">
      <Row className="justify-content-center">
        <Col xs="auto" id="list-col">
          <Box sx={{ display: "flex" }}>
            <ThemeProvider
              theme={createTheme({
                components: {
                  MuiListItemButton: {
                    defaultProps: {
                      disableTouchRipple: true,
                    },
                  },
                },
                palette: {
                  mode: "dark",
                  primary: { main: "rgb(102, 157, 246)" },
                  background: { paper: "#282424" },
                },
              })}
            >
              <Paper elevation={0} sx={{ width: 555, minWidth: 250 }}>
                <FireNav component="nav" disablePadding>
                  <ListItemButton id="pointer">
                    <ListItemIcon sx={{ fontSize: 20 }} id="pointer">
                      ⚡
                    </ListItemIcon>
                    <ListItemText
                      sx={{ my: 0 }}
                      primary="Languages I work with"
                      primaryTypographyProps={{
                        fontSize: 20,
                        fontWeight: "medium",
                        letterSpacing: 0,
                      }}
                      id="pointer"
                    />
                  </ListItemButton>
                  <Divider />
                  <Box
                    sx={{
                      bgcolor: open1 ? "#282424" : null,
                      pb: open1 ? 2 : 0,
                    }}
                  >
                    <ListItemButton
                      alignItems="flex-start"
                      onClick={() => setOpen1(!open1)}
                      sx={{
                        px: 3,
                        pt: 2.5,
                        pb: open1 ? 0 : 2.5,
                        "&:hover, &:focus": {
                          "& svg": { opacity: open1 ? 1 : 0 },
                        },
                      }}
                    >
                      <ListItemText
                        primary="Languages"
                        primaryTypographyProps={{
                          fontSize: 15,
                          fontWeight: "medium",
                          lineHeight: "20px",
                          mb: "2px",
                        }}
                        secondary="Java, JavaScript, C, C++, HTML, CSS, PHP"
                        secondaryTypographyProps={{
                          noWrap: true,
                          fontSize: 12,
                          lineHeight: "16px",
                          color: open1
                            ? "rgba(0,0,0,0)"
                            : "rgba(255,255,255,0.5)",
                        }}
                        sx={{ my: 0 }}
                      />
                      <KeyboardArrowDown
                        sx={{
                          mr: -1,
                          opacity: 1,
                          transform: open1 ? "rotate(-180deg)" : "rotate(0)",
                          transition: "0.2s",
                        }}
                      />
                    </ListItemButton>
                    {open1 &&
                      data1.map((item) => (
                        <ListItemButton
                          key={item.label}
                          sx={{
                            py: 0,
                            minHeight: 32,
                            color: "rgba(255,255,255,.8)",
                          }}
                          id="pointer"
                        >
                          <ListItemIcon sx={{ color: "inherit" }} id="pointer">
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              fontSize: 14,
                              fontWeight: "medium",
                            }}
                            id="pointer"
                          />
                        </ListItemButton>
                      ))}
                  </Box>
                </FireNav>
              </Paper>
            </ThemeProvider>
          </Box>
        </Col>
        <Col xs="auto" id="list-col">
          <Box sx={{ display: "flex" }}>
            <ThemeProvider
              theme={createTheme({
                components: {
                  MuiListItemButton: {
                    defaultProps: {
                      disableTouchRipple: true,
                    },
                  },
                },
                palette: {
                  mode: "dark",
                  primary: { main: "rgb(102, 157, 246)" },
                  background: { paper: "#282424" },
                },
              })}
            >
              <Paper elevation={0} sx={{ width: 555, minWidth: 250 }}>
                <FireNav component="nav" disablePadding>
                  <ListItemButton id="pointer">
                    <ListItemIcon sx={{ fontSize: 20 }} id="pointer">
                      🧰
                    </ListItemIcon>
                    <ListItemText
                      sx={{ my: 0 }}
                      primary="Dev Tools I use"
                      primaryTypographyProps={{
                        fontSize: 20,
                        fontWeight: "medium",
                        letterSpacing: 0,
                      }}
                      id="pointer"
                    />
                  </ListItemButton>
                  <Divider />
                  <Box
                    sx={{
                      bgcolor: open2 ? "#282424" : null,
                      pb: open2 ? 2 : 0,
                    }}
                  >
                    <ListItemButton
                      alignItems="flex-start"
                      onClick={() => setOpen2(!open2)}
                      sx={{
                        px: 3,
                        pt: 2.5,
                        pb: open2 ? 0 : 2.5,
                        "&:hover, &:focus": {
                          "& svg": { opacity: open2 ? 1 : 0 },
                        },
                      }}
                    >
                      <ListItemText
                        primary="Dev Tools"
                        primaryTypographyProps={{
                          fontSize: 15,
                          fontWeight: "medium",
                          lineHeight: "20px",
                          mb: "2px",
                        }}
                        secondary="JavaFX, Github, Gitlab, MySQL, phpMyAdmin, Node, Express, React"
                        secondaryTypographyProps={{
                          noWrap: true,
                          fontSize: 12,
                          lineHeight: "16px",
                          color: open2
                            ? "rgba(0,0,0,0)"
                            : "rgba(255,255,255,0.5)",
                        }}
                        sx={{ my: 0 }}
                      />
                      <KeyboardArrowDown
                        sx={{
                          mr: -1,
                          opacity: 1,
                          transform: open2 ? "rotate(-180deg)" : "rotate(0)",
                          transition: "0.2s",
                        }}
                      />
                    </ListItemButton>
                    {open2 &&
                      data2.map((item) => (
                        <ListItemButton
                          key={item.label}
                          sx={{
                            py: 0,
                            minHeight: 32,
                            color: "rgba(255,255,255,.8)",
                          }}
                          id="pointer"
                        >
                          <ListItemIcon sx={{ color: "inherit" }} id="pointer">
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              fontSize: 14,
                              fontWeight: "medium",
                            }}
                            id="pointer"
                          />
                        </ListItemButton>
                      ))}
                  </Box>
                </FireNav>
              </Paper>
            </ThemeProvider>
          </Box>
        </Col>
      </Row>
    </Container>
  );
}
