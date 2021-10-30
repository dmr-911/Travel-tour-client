import React, { useEffect, useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
  const { user } = useAuth();
    const [addedOrders, setAddedOrders] = useState([]);
    useEffect(() => {
        fetch(`https://infinite-stream-42915.herokuapp.com/addOffer?search=${user.email}`)
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
      <Container fluid className="bg-dark pb-5">
        <h2 className="text-white my-2">
          {" "}
          <span className="text-white">My</span>{" "}
          <span className="color-orrange">Orders</span>
        </h2>
        <div className="divider bg-info rounded mb-3 mx-auto"></div>
        {addedOrders.length ? (
          <>
            <Container className="bg-light rounded-2 p-3 mb-2">
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
          </>
        ) : (
          <h2 className="text-white">You haven't ordered yet!</h2>
        )}
      </Container>
      <div className="divider bg-info rounded mb-3 mx-auto"></div>
    </>
  );
};

export default MyOrders;