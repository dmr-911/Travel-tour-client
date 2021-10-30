import React, { useEffect, useState } from 'react';
import './PopularDestinations.css';
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import SinglePopularDestination from '../SinglePopularDestination/SinglePopularDestination';

const PopularDestionations = () => {
  const location = <FontAwesomeIcon icon={faMapMarkerAlt} style={{color: 'tomato'}}/>;
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        // fetch("http://localhost:5000/destinations")
        fetch("https://infinite-stream-42915.herokuapp.com/destinations")
          .then((res) => res.json())
          .then((data) => setDestinations(data));
    },[])
    return (
      <Container fluid className="px-0 bg-dark">
        <Container className="py-5 text-white text-start">
          <h2>
            <span>{location}</span> Popular Destinations
          </h2>
          <small className="text-secondary">
            Our Favorite Travel Documentaries and Where to Watch Them ... and
            nature documentary in one of the most <br /> extraordinary places in the
            world
          </small>
        </Container>
        
                <Row xs={1} md={1} lg={5} className="g-0 mx-0">
                    {
                    destinations.map(destination => <SinglePopularDestination
                    key={destination.key}
                    destination={destination}
                    ></SinglePopularDestination>)
                    }
                </Row>
        </Container>
    );
};

export default PopularDestionations;