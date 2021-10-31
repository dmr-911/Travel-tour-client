import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './NavbarCustom.css';
import { HashLink as Link } from "react-router-hash-link";

const NavbarCustom = () => {
  const { user, logOut } = useAuth();
    return (
      <div>
        <Navbar className="custom-nav-bg w-100" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand as={Link} to="/home#home">
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
                <Nav.Link as={Link} to="/home#home">
                  Home
                </Nav.Link>
                {user.email && (
                  <>
                    <Nav.Link as={Link} to="/myOrders#myOrders">
                      My Orders
                    </Nav.Link>
                    <Nav.Link as={Link} to="/allOrders#allOrders">
                      Manage Orders
                    </Nav.Link>
                    <Nav.Link as={Link} to="/addOffer#addOffer">
                      Add Offer
                    </Nav.Link>
                    {user.email === "dewan.mizanur911@gmail.com" && (
                      <Nav.Link as={Link} to="/deleteOffer#deleteOffer">
                        Delete Offer
                      </Nav.Link>
                    )}
                  </>
                )}
                <Nav.Link as={Link} to="/about#about">
                  About
                </Nav.Link>
                {user.email ? (
                  <div className="d-flex align-items-center mx-auto">
                    <img
                      src={user.reloadUserInfo.photoUrl}
                      alt=""
                      height="30px"
                      width="30px"
                      className="rounded-circle mx-2"
                    />
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