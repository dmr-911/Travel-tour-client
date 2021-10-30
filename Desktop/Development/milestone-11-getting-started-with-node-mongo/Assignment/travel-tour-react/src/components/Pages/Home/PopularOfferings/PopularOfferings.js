import { Container, Row, Spinner } from 'react-bootstrap';
import useOfferings from '../../../../hooks/useOfferings';
import SingleOffering from '../SingleOffering/SingleOffering';
import './PopularOfferings.css';

const PopularOfferings = () => {
  const { offerings } = useOfferings();
    return (
      <Container fluid className="popular-container">
        <Container className="pt-5">
          <h3 className="fw-bold text-white" style={{ textAlign: "left" }}>
            Popular Tour Packages
          </h3>
          {offerings.length ? (
            <Row xs={1} md={3} className="g-4 py-5">
              {offerings.map((offering) => (
                <SingleOffering
                  key={offering._id}
                  offering={offering}
                ></SingleOffering>
              ))}
            </Row>
          ) : (
            <Spinner className="my-5" animation="border" variant="light" />
          )}
        </Container>
      </Container>
    );
};

export default PopularOfferings;