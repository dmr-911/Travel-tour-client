import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Spinner } from 'react-bootstrap';
import useOfferings from '../../../hooks/useOfferings';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const DeleteOffer = () => {
    const [orders, setOrders] = useState([]);
        useEffect(() => {
          fetch("http://localhost:5000/offerings")
            .then((res) => res.json())
            .then((data) => setOrders(data));
        }, []);

    const del = <FontAwesomeIcon icon={faTrashAlt} className="text-danger"/>;
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/offerings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const rest = orders.filter((order) => order._id !== id);
                    setOrders(rest);
                }
            });
        
        
      };
    return (
      <div>
        <Container fluid className="bg-dark pb-5">
          <h2 className="text-white my-2">
            <span className="text-white">Delete</span>{" "}
            <span className="color-orrange">Offer</span>
          </h2>
          <div className="divider bg-info rounded mb-3 mx-auto"></div>
          <Container className="bg-light rounded-2 p-3 mb-5">
            <Table responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Cost</th>
                  <th>Description</th>
                  <th>Rating</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {orders.length ? (
                  orders.map((offer) => (
                    <tr key={offer._id}>
                      <td>{offer.name}</td>
                      <td>{offer.price}</td>
                      <td>{offer.description}</td>
                      <td>{offer.rating}</td>
                      <td
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDelete(offer._id)}
                      >
                        {del}
                      </td>
                    </tr>
                  ))
                ) : (
                  <Spinner animation="border" variant="dark" />
                )}
              </tbody>
            </Table>
          </Container>
          <div className="divider bg-info rounded mx-auto"></div>
        </Container>
      </div>
    );
};

export default DeleteOffer;