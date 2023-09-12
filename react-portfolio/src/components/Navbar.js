import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">About Me</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/resume">Resume</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarComponent;
