import React from 'react';
import PopularDestionations from '../PopularDestinations/PopularDestionations';
import PopularOfferings from '../PopularOfferings/PopularOfferings';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Support from '../Support/Support';
import useOfferings from '../../../../hooks/useOfferings';
import { Spinner } from 'react-bootstrap';

const Home = () => {
  const { offerings } = useOfferings();
  return (
    <div id="#home">
      {offerings.length ? (
        <>
          <Banner></Banner>
          <Services></Services>
          <PopularOfferings></PopularOfferings>
          <PopularDestionations id="#home"></PopularDestionations>
          <Support></Support>
        </>
      ) : (
        <div
          style={{ height: "100vh", width: "100%" }}
          className="bg-light d-flex justify-content-center align-items-center"
        >
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" />
        </div>
      )}
    </div>
  );
};

export default Home;