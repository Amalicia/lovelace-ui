import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Spinner} from 'react-bootstrap'
import cow from './images/cow_logo.png';
import fish from './images/fish.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <div className="Nav">
          <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={cow}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Lovelace
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={fish} className="App-logo" alt="logo" />
          <p>
            This is a work in progress...
          </p>
          <Spinner animation="border"></Spinner>
        </header>
      </div>
    </div>
  );
}

export default App;