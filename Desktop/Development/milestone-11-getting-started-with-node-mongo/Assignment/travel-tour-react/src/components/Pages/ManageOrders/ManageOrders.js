import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import './ManageOrders.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders);
    useEffect(() => {
        fetch("https://infinite-stream-42915.herokuapp.com/addOffer")
          .then((res) => res.json())
          .then((data) => setOrders(data));
    }, []);
    const del = <FontAwesomeIcon icon={faTrashAlt} />;

    return (
      <Container fluid className="bg-dark pb-5">
        <h2 className="text-white mb-2">All Orders</h2>
        <div className="divider bg-info rounded mb-3 mx-auto"></div>
        <Container className="bg-light rounded-2 p-3 mb-5">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Preserved Offer</th>
                <th>Cost</th>
                <th>Status</th>
                <th>Approve</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.info.name}</td>
                  <td>$ {order.info.price}</td>
                  <td>{order.info.status}</td>
                  <td>
                    <Button variant="primary">Approve</Button>
                  </td>
                  <td>
                    <Button variant="danger">{del}</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <div className="divider bg-info rounded mx-auto"></div>
      </Container>
    );
};

export default ManageOrders;