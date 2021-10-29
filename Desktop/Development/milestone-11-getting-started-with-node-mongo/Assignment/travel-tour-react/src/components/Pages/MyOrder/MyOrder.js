import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './MyOrder.css';

const MyOrder = ({ order, handleDelete }) => {
    const { info, _id } = order;

    return (
      <Col>
        <Card className="border border-2 border-dark custom-bg text-white">
          <Card.Img variant="top" src={info.image} height="200px" />
          <Card.Body>
            <Card.Title>{info.name}</Card.Title>
            <Card.Text>
              <span>
                <b className="text-info"> Cost : ${info.price} </b>
              </span>
              <span>
                Rating : <b>{info.rating}</b>
              </span>
            </Card.Text>
            <Button variant="warning text-white" disabled>{info.status}</Button>{" "}
            <Button variant="danger" onClick={()=> handleDelete(_id)}>Delete</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default MyOrder;