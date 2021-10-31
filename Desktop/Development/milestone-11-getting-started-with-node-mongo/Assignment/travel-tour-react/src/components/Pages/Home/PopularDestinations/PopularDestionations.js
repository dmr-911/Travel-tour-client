import React from 'react';
import './PopularDestinations.css';
import { Container, Row, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import SinglePopularDestination from '../SinglePopularDestination/SinglePopularDestination';
import useDetination from '../../../../hooks/useDestination';

const PopularDestionations = () => {
  const location = <FontAwesomeIcon icon={faMapMarkerAlt} style={{color: 'tomato'}}/>;
  const { destinations } = useDetination();
    return (
      <Container fluid className="px-0 bg-dark">
        <Container className="py-5 text-white text-start">
          <h2>
            <span>{location}</span> <span className="text-white">Popular</span>{" "}
            <span className="color-orrange">Destinations</span>
          </h2>
          <small className="text-secondary">
            Our Favorite Travel Documentaries and Where to Watch Them ... and
            nature documentary in one of the most <br /> extraordinary places in
            the world
          </small>
        </Container>
        {destinations.length ? (
          <Row xs={1} md={1} lg={5} className="g-0 mx-0">
            {destinations.map((destination) => (
              <SinglePopularDestination
                key={destination.key}
                destination={destination}
              ></SinglePopularDestination>
            ))}
          </Row>
        ) : (
          <Spinner className="my-5" animation="border" variant="light" />
        )}
      </Container>
    );
};

export default PopularDestionations;