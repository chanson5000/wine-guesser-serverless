import React, { useState, useEffect } from 'react';
import WineCard from '../wine/WineCard';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { getAllWines } from '../../actions/WineRestService';
import { Link } from 'react-router-dom';
import arrowSpinner from '../../components/common/arrowSpinner.gif';

export default function AllWines(isRedWine = false) {
  const [wines, setWines] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    loadWines();
  }, []);

  async function loadWines() {
    try {
      const response = await getAllWines(isRedWine);
      setWines(response);
    } catch (e) {
      setWines([]);
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <React.Fragment>
        <h2 className="text-center p-4">
          All {isRedWine && isRedWine ? 'Red' : 'White'} Wines
        </h2>
        {loading === true && (
          <div className="text-center p-4">
            <img src={arrowSpinner} alt="Loading..."/>
          </div>
        )}
        {wines &&
        wines.map(wine => (
          <Link
            to={`/wines/${isRedWine === true ? 'red' : 'white'}/${
              wine.varietal
            }/${wine.world}`}
            key={wine.varietal + wine.world}
          >
            <WineCard
              isRedWine={isRedWine}
              key={wine.varietal + wine.world}
              wine={wine}
              onWineDeleted={this.onWineDeleted}
            />
          </Link>
        ))}
      </React.Fragment>
    </Container>
  );
}

AllWines.propTypes = {
  isRedWine: PropTypes.bool.isRequired
};

AllWines.defaultProps = {
  isRedWine: false
};
