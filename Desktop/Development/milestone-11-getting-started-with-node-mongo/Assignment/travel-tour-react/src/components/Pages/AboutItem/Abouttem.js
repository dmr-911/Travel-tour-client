import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import "./AboutItem.css";

const AboutItem = (props) => {
  const { name, info, image } = props.item;
  return (
    <Col>
      <Card className="about-card">
        <Row className="p-3">
          <Col xs={5} className="p-3">
            <Image variant="top" src={image} height="70" width="70" />
          </Col>
          <Col xs={7}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default AboutItem;
