import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import github from './images/github_logo.png';
import linkedin from './images/linkedin_logo.png';
import logo from './images/logo.png';

import Projects from "./components/Project/Projects"

export default function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><img src={logo} style={{width: 50, height: 50}} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/users">Another Link</Nav.Link>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

function LandingPage() {
  return (
    <div align="center">
      <h4>Hi, my name is</h4>
      <h1>Roberto Basulto</h1>
      <h1>I am a Software Developer</h1>
      <p>
      more info will go here
      </p>
      <div>
        <a href="https://github.com/Eternal-Flame085">
          <img src={github} length="30" height="30"></img>
        </a>
        <a href="https://www.linkedin.com/in/roberto-basulto/">
          <img src={linkedin} length="30" height="30"></img>
        </a>
      </div>
      {/* <img src="https://avatars.githubusercontent.com/u/63683549?s=400&u=2a570652ac4f72944a49c64842702154c7466b5c&v=4"></img> */}
    </div>
    )
}

function Users() {
  return <h2>Users</h2>;
}
