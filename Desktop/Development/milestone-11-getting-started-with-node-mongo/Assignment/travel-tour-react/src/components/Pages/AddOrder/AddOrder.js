import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import useOfferings from '../../../hooks/useOfferings';
import './AddOrder.css';

const AddOrder = () => {
    const { offerings } = useOfferings();
    const { user } = useAuth();
    const { id } = useParams();
    const history = useHistory();
      const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const found = offerings.find(offer => offer._id === id);
        data.info = found;
        data.info.status = 'pending';
        fetch("https://infinite-stream-42915.herokuapp.com/addOffer", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                reset();
                history.push('/myOrders')
            });
    };

    return (
      <div className="bg-dark login-page pt-5">
        <img src="https://i.ibb.co/QDt4j81/logo.png" alt="" />
        <Col xs={12} md={5} className="mx-auto mt-5">
          <Card className="p-3">
            <h3>Add Your Information</h3>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                value={user.displayName || ""}
                className="add-order-input"
                {...register("name", { required: true })}
              />{" "}
              <br />
              <input
                value={user.email || ""}
                className="add-order-input"
                {...register("email", { required: true })}
              />{" "}
              <br />
              <input
                className="add-order-input"
                {...register("city", { required: true })}
                placeholder="Your city"
              />{" "}
              <br />
              <input
                className="add-order-input"
                {...register("country", { required: true })}
                placeholder="Your county"
              />{" "}
              <br />
              <input type="submit" value="Proceed" />
            </form>
          </Card>
        </Col>
        <div className="divider bg-info rounded mt-4 mx-auto"></div>
      </div>
    );
};

export default AddOrder;