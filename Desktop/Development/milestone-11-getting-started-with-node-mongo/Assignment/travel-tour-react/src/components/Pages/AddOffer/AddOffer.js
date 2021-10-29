import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';

const AddOffer = () => {
    return (
      <Container fluid className="bg-dark pb-5">
        <h2 className="text-white mb-2">Add New Offer</h2>
        <div className="divider bg-info rounded mb-3 mx-auto"></div>
        <Col xs={10} md={4} className="mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Offer Name"
                className="border border-1 border-dark"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Image Url"
                className="border border-1 border-dark"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="number"
                placeholder="Enter Cost"
                className="border border-1 border-dark"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Enter Rating"
                className="border border-1 border-dark"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Status"
                className="border border-1 border-dark"
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Add Offer
            </Button>
          </Form>
        </Col>
        <div className="divider bg-info rounded mt-5 mx-auto"></div>
      </Container>
    );
};

export default AddOffer;