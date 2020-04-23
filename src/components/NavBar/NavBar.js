import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import cow from './cow_logo.png';

const NavBar = () => (
    <div className="Nav">
      <Navbar bg="dark" variant="dark">
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
);

export default NavBar;