import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/pages/Projects";
import More from "./components/pages/More";
import About from "./components/pages/About";
import TransferMarket from "./components/pages/TransferMarket";
import TicTacToe from "./components/pages/TicTacToe";
import MataPals from "./components/pages/MataPals";
import AppleClone from "./components/pages/AppleClone";
import SpotifyClone from "./components/pages/SpotifyClone";
import GoogleClone from "./components/pages/GoogleClone";
import LoginSystem from "./components/pages/LoginSystem";
import ScientificCalculator from "./components/pages/ScientificCalculator";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path={process.env.PUBLIC_URL + "/projects"}
            exact
            component={Projects}
          />
          <Route
            path={process.env.PUBLIC_URL + "/more"}
            exact
            component={More}
          />
          <Route
            path={process.env.PUBLIC_URL + "/about"}
            exact
            component={About}
          />
          <Route
            path={process.env.PUBLIC_URL + "/matapals"}
            exact
            component={MataPals}
          />
          <Route
            path={process.env.PUBLIC_URL + "/tic-tac-toe"}
            exact
            component={TicTacToe}
          />
          <Route
            path={process.env.PUBLIC_URL + "/transfermarket"}
            exact
            component={TransferMarket}
          />
          <Route
            path={process.env.PUBLIC_URL + "/apple-clone"}
            exact
            component={AppleClone}
          />
          <Route
            path={process.env.PUBLIC_URL + "/spotify-clone"}
            exact
            component={SpotifyClone}
          />
          <Route
            path={process.env.PUBLIC_URL + "/google-clone"}
            exact
            component={GoogleClone}
          />
          <Route
            path={process.env.PUBLIC_URL + "/login-system"}
            exact
            component={LoginSystem}
          />
          <Route
            path={process.env.PUBLIC_URL + "/scientific-calculator"}
            exact
            component={ScientificCalculator}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
