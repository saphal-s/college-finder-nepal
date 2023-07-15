import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../img/college.png";
import "./style.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navs pb-3">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="logo" alt="college finder logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-lg-5"></Nav>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#partner">Become a Partner</Nav.Link>
              <Nav.Link href="#register">Register College</Nav.Link>
            </Nav>
            <Nav className="mt-md-4">
              <Nav.Link
                href="#register"
                className="button mt-3 mt-md-0 mt-lg-0"
              >
                Register
              </Nav.Link>
              <Nav.Link href="#login" className="button mt-3 mt-md-0 mt-lg-0">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
