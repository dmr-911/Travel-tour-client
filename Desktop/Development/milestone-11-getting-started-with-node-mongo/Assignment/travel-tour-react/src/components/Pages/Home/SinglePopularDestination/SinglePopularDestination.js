import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import './SinglePopularDestination.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const SinglePopularDestination = ({ destination }) => {
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />;
    const { image, place } = destination;
    return (
      <Container fluid>
        <Col>
          <Card className="destination-card">
            <Card.Img className="destination-img" variant="top" src={image} height="250px"/>
            <Card.Body>
              <Card.Title>{location} <span> {place}</span></Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    );
};

export default SinglePopularDestination;