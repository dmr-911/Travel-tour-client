import React from 'react';
import PopularDestionations from '../PopularDestinations/PopularDestionations';
import PopularOfferings from '../PopularOfferings/PopularOfferings';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Services></Services>
        <PopularOfferings></PopularOfferings>
        <PopularDestionations></PopularDestionations>
      </div>
    );
};

export default Home;