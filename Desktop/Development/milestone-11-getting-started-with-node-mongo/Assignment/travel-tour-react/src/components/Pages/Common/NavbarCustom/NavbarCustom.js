import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './NavbarCustom.css';

const NavbarCustom = () => {
  const { user, logOut } = useAuth();
  console.log(user);
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
                <Nav.Link as={NavLink} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/myOrders">
                  My Orders
                </Nav.Link>
                <Nav.Link as={NavLink} to="/allOrders">
                  Manage Orders
                </Nav.Link>
                <Nav.Link as={NavLink} to="/addOffer">
                  Add Offer
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about">
                  About
                </Nav.Link>
                {user.email ? (
                  <div className="d-flex align-items-center mx-auto">
                    <img src={user.reloadUserInfo.photoUrl} alt="" height="30px" width="30px" className="rounded-circle mx-2"/>
                    <button
                      onClick={logOut}
                      className="btn-danger rounded me-2"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Nav.Link as={NavLink} to="/login">
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default NavbarCustom;