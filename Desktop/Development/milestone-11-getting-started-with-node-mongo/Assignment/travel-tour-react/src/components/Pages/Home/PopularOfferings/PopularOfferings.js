import React, {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleOffering from '../SingleOffering/SingleOffering';
import './PopularOfferings.css';

const PopularOfferings = () => {
    const [offerings, setOfferings] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/offerings")
            .then(res => res.json())
            .then(data => setOfferings(data));
    },[])
    return (
      <Container fluid className="popular-container">
        <Container className="pt-5">
          <h3 className="fw-bold text-white" style={{ textAlign: "left" }}>
            Popular Tour Packages
          </h3>
          <Row xs={1} md={3} className="g-4 py-5">
            {offerings.map((offering) => (
              <SingleOffering
                key={offering.key}
                offering={offering}
              ></SingleOffering>
            ))}
          </Row>
        </Container>
      </Container>
    );
};

export default PopularOfferings;