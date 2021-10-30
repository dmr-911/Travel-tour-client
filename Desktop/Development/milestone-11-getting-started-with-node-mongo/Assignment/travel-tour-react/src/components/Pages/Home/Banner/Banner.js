import React from 'react';
import { useHistory } from "react-router-dom";
import { Col, Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/about');
  }
    return (
      <Container fluid className="banner">
        <Container className="d-flex h-100 align-items-center text-white">
          <Col
            md={5}
            className="d-flex flex-column justify-content-start text-white"
          >
            <h1 style={{ textAlign: "left", fontSize: "80px" }} className="">
              {" "}
              <span className="text-white">SPE</span>
              <span className="color-orrange">CIAL</span>
            </h1>
            <h3 className="fw-bold" style={{ color: "" }}>
              All kind of tours through the world
            </h3>
            <button onClick={handleClick} className="btn-banner d-inline">Learn More</button>
          </Col>
        </Container>
      </Container>
    );
};

export default Banner;