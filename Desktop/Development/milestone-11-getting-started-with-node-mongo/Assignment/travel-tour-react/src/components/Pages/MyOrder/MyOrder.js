import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './MyOrder.css';

const MyOrder = ({ order, handleDelete }) => {
    const { info, _id } = order;

    return (
      <Col className="mx-auto">
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
            {
              info.status === 'approved' ?
                <Button variant="success" disabled>{info.status}</Button>
            :
            <Button variant="warning" disabled>{info.status}</Button>
            }
            <Button className="ms-3" variant="danger" onClick={()=> handleDelete(_id)}>Delete</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default MyOrder;