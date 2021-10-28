import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './SingleOffering.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Rating from 'react-rating';

const SingleOffering = ({ offering }) => {
    const { image, name, rating, price, time, description } = offering;
    const clock = <FontAwesomeIcon icon={faClock} style={{backgroundColor:'white', color:'blue', fontSize:'18px'}}/>;
    return (
      <Col>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Row>
              <Col xs={7} className="d-flex flex-column align-items-start">
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className="w-50 d-flex justify-content-between my-2">
                  {clock}
                  <small>{time}</small>
                </div>
                <Rating
                  initialRating={rating}
                  emptySymbol="far fa-star icon-color"
                  fullSymbol="fas fa-star  icon-color"
                  readonly
                />
              </Col>
              <Col xs={5}>
                <h2 className="fw-bold">${price}</h2>
              </Col>
            </Row>
            <Button variant="danger" className="mt-3">Buy Package</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default SingleOffering;