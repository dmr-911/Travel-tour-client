import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './SingleOffering.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Rating from 'react-rating';
import { useHistory } from 'react-router';

const SingleOffering = ({ offering }) => {
  const history = useHistory();
  const { image, name, rating, price, time, description, _id } = offering;
  const clock = <FontAwesomeIcon icon={faClock} style={{ backgroundColor: 'white', color: 'blue', fontSize: '18px' }} />;
  
  const onHandleBuy = () => {
    const uri = `/addOrder/${_id}`;
    history.push(uri);
  };

    return (
      <Col>
        <Card className="offer-card">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Row>
              <Col xs={7} className="d-flex flex-column align-items-start">
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description.slice(0, 99)}</Card.Text>
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
            <Button onClick={onHandleBuy} variant="danger" className="mt-3">Buy Package</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default SingleOffering;