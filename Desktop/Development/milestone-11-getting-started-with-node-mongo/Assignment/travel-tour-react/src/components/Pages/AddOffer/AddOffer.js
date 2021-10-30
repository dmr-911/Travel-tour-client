import React, { useState } from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddOffer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://infinite-stream-42915.herokuapp.com/offerings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        handleShow();
      });
  };

    return (
      <div className="bg-dark login-page pt-5">
        <img src="https://i.ibb.co/QDt4j81/logo.png" alt="" />
        <Col xs={12} md={5} className="mx-auto mt-5">
          <Card className="p-3">
            <h3>Add New Offer Information</h3>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="add-order-input"
                placeholder="Offer Name"
                {...register("name", { required: true })}
              />{" "}
              <br />
              <input
                className="add-order-input"
                placeholder="Add Description"
                {...register("description", { required: true })}
              />{" "}
              <br />
              <input
                className="add-order-input"
                placeholder="Add image url"
                {...register("image", { required: true })}
              />{" "}
              <br />
              <input
                className="add-order-input"
                placeholder="Add Offer Price"
                {...register("price", { required: true })}
              />{" "}
              <br />
              <input
                className="add-order-input"
                placeholder="Add duration"
                {...register("time", { required: true })}
              />{" "}
              <br />
              <input
                className="add-order-input"
                placeholder="Add rating"
                {...register("rating", { required: true })}
              />{" "}
              <br />
              <input type="submit" value="Proceed"/>
            </form>
          </Card>
        </Col>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Offer Added</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you've added a new Offer.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
};

export default AddOffer;