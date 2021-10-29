import React from "react";
import { Card, Col } from "react-bootstrap";
import "./AboutItem.css";

const AboutItem = (props) => {
  const { name, info } = props.item;
  return (
    <Col>
      <Card className="about-card">
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{info}</Card.Text>
            </Card.Body>
      </Card>
    </Col>
  );
};

export default AboutItem;
