import React, { useState } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import './Support.css';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Customer Support
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-danger">Currently Unavailabe!</h4>
        <p>
          We are currently working on our customer support session, hopefully we wil be online within some days. Thank you for co-operating with us.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Support = () => {
  const [modalShow, setModalShow] = useState(false);
    return (
      <Container fluid className="support-container p-5">
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
              <Button onClick={() => setModalShow(true)} className="custom-btn">
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
              <Button onClick={() => setModalShow(true)} className="custom-btn">
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
              <Button onClick={() => setModalShow(true)} className="custom-btn">
                Check It
              </Button>
            </div>
          </Col>
        </Row>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    );
};

export default Support;