import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import navBarLogo from "../../assets/navbar-logo.png"
import styles from "./navbar.module.css"

class NavBar extends Component {
  render() {
    return (
      <>
      <Navbar className={styles.navBarContainer} bg="white" expand="lg">
        <Navbar.Brand href="#home">
          <img
          src={navBarLogo}
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Link to={"./#"}><Nav.Link >Home</Nav.Link></Link>
            <Link to={"./#"}><Nav.Link >Payment</Nav.Link></Link>
            <Link to={"./#"}><Nav.Link >Profile</Nav.Link></Link>
          </Nav>
          <NavDropdown title="Location" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Jakarta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Liverpool</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Amsterdam</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Suggest Location Here</NavDropdown.Item>
            </NavDropdown>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <Button variant="primary">Sign Up</Button>{' '}
        </Navbar.Collapse>
      </Navbar>
        {/* <Link to="/learning/basic-react">Basic</Link> |{" "}
        <Link to="/learning/basic-home">Home</Link> |{" "}
        <Link to="/learning/basic-movieDetail">Movie Detail</Link> */}
      </>
    );
  }
}

export default NavBar;