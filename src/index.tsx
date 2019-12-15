import "./style.less";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import App from "./App";
import CreatePost from "./CreatePost";

ReactDOM.render(
  <Router>
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Instagram</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/createPost"> Create Post</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/createPost">
          <CreatePost />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </div>
  </Router>,

  document.getElementById("app")
);
