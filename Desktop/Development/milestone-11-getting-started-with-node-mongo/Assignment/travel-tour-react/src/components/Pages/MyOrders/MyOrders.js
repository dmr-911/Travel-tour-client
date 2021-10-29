import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [addedOrders, setAddedOrders] = useState([]);
    useEffect(() => {
        fetch("https://infinite-stream-42915.herokuapp.com/addOffer")
            .then(res => res.json())
            .then(data => setAddedOrders(data));
    }, []);
        const handleDelete = (id) => {
          const uri = `https://infinite-stream-42915.herokuapp.com/addOffer/${id}`;
          fetch(uri, {
            method: "DELETE",
          })
            .then((res) => res.json)
              .then((data) => {
                  const restOrders = addedOrders.filter(order => order._id !== id)
                  setAddedOrders(restOrders);
            });
        };

  return (
    <>
      <Container fluid className="bg-dark pb-5" style={{ height: "80vh" }}>
        <h2 className="text-white mb-2">My Orders</h2>
        <div className="divider bg-info rounded mb-3 mx-auto"></div>
        {addedOrders.length && (
          <>
          <Container className="bg-light rounded-2 p-3 mb-5">
            <Row xs={1} md={3} lg={4} className="g-2">
              {addedOrders.map((order) => (
                <MyOrder
                  key={order._id}
                  order={order}
                  handleDelete={handleDelete}
                ></MyOrder>
              ))}
            </Row>
          </Container>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            </>
        )}
      </Container>
    </>
  );
};

export default MyOrders;