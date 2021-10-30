import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useDetination from '../../../../hooks/useDestination';

const DestinationDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { destinations } = useDetination();
    const item = destinations.find(destination => destination._id === id);
    const handleBack = () => {
        history.push('/home#destinations');
    }

    return (
      <div className="bg-dark login-page pt-5">
        <img src="https://i.ibb.co/QDt4j81/logo.png" alt="" />
        <Col xs={12} md={5} className="mx-auto mt-5">
          <Card className="p-3">
            <h3>Destination Details</h3>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <Card.Img variant="top" src={item?.image} />
            <Card.Body>
              <Card.Title>Place : {item?.place}</Card.Title>
              <Card.Text>
                <small>
                  <b>Description : </b>
                  {item?.description}
                </small>
              </Card.Text>
              <Button variant="primary" onClick={handleBack}>Back to Home</Button>
            </Card.Body>
          </Card>
        </Col>
        <div className="divider bg-info rounded my-3 mx-auto"></div>
      </div>
    );
};

export default DestinationDetails;