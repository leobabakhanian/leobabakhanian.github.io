import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/pages/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
import MessageBoard from "./components/pages/MessageBoard";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/more" exact component={More} />
          <Route path="/about" exact component={About} />
          <Route path="/matapals" exact component={MataPals} />
          <Route path="/tic-tac-toe" exact component={TicTacToe} />
          <Route path="/transfermarket" exact component={TransferMarket} />
          <Route path="/message-board" exact component={MessageBoard} />
          <Route path="/apple-clone" exact component={AppleClone} />
          <Route path="/spotify-clone" exact component={SpotifyClone} />
          <Route path="/google-clone" exact component={GoogleClone} />
          <Route path="/login-system" exact component={LoginSystem} />
          <Route
            path="/scientific-calculator"
            exact
            component={ScientificCalculator}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
