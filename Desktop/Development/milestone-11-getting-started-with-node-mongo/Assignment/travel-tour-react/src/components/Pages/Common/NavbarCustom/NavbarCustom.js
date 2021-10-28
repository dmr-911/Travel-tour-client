import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './NavbarCustom.css';

const NavbarCustom = () => {
    return (
      <div>
        <Navbar className="custom-nav-bg w-100" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand as={Link} to="/home">
              <img
                alt=""
                src="https://i.ibb.co/QDt4j81/logo.png"
                width="160"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/myOrders">My Orders</Nav.Link>
                <Nav.Link as={NavLink} to="/allOrders">Manage Orders</Nav.Link>
                <Nav.Link as={NavLink} to="/addOffer">Add Offer</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default NavbarCustom;