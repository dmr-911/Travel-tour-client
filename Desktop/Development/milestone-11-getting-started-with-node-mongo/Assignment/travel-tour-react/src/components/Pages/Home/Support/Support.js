import React, { useState } from 'react';
import { Col, Container, Row, Button, Toast } from 'react-bootstrap';
import './Support.css';

const Support = () => {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
    return (
      <Container fluid className="support-container p-5">
        <Toast
          show={showA}
          onClose={toggleShowA}
          style={{ position: "absolute", right: 0 }}
        >
          <Toast.Header>
            <strong className="me-auto">Support</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>
            Currently customer support is not availabe! We will notify you when
            customer support is ready!
          </Toast.Body>
        </Toast>
        <Row xs={1} md={3} className="g-4 support-row w-100 p-5 text-white">
          <Col className="d-flex mt-5 pt-5">
            <div>
              <img
                src="https://i.ibb.co/BsSx8y6/ico-support.png"
                alt=""
                height="80"
                width="80"
              />
            </div>
            <div>
              <h3 className="fw-bold">
                <span className="color-orrange">Support in 1 Day</span>
              </h3>
              <p>
                Don't worry we have a great support team ready to help you at
                any time in a very professional way.
              </p>
              <Button onClick={toggleShowA} className="custom-btn">
                Check It
              </Button>
            </div>
          </Col>
          <Col className="d-flex mt-5 pt-5">
            <div>
              <img
                src="https://i.ibb.co/CJcP87b/ico-update2.png"
                alt=""
                height="80"
                width="80"
              />
            </div>
            <div>
              <h3 className="fw-bold">
                <span className="color-orrange">Well Documented</span>
              </h3>
              <p>
                You can solve all your doubts thanks to the documentation and
                the video tutorials present ready for help you.
              </p>
              <Button onClick={toggleShowA} className="custom-btn">
                Check It
              </Button>
            </div>
          </Col>
          <Col className="d-flex mt-5 pt-5">
            <div>
              <img
                src="https://i.ibb.co/kM3BDCX/ico-doc.png"
                alt=""
                height="80"
                width="80"
              />
            </div>
            <div>
              <h3 className=" fw-bold">
                <span className="color-orrange">Always Updated</span>
              </h3>
              <p>
                We guarantee frequent updates to always add new features and new
                most requested compatibility.
              </p>
              <Button onClick={toggleShowA} className="custom-btn">
                Check It
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default Support;