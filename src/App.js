import './App.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import VersusData from './VersusData'
import PlayerData from './PlayerData'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar bg="light" variant="light" sticky="top">
        <Navbar.Brand href="/">Replay Helper</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/player-data">Player Data</Nav.Link>
        </Nav>
      </Navbar>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/player-data">
          <PlayerData />
        </Route>
        <Route path="/">
          <VersusData />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;