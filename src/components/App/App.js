import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Spinner} from 'react-bootstrap'
import fish from './fish.png';
import cow from './cow_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {
  render() {
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
}
