import React, { Component } from 'react';
import WineRecord from '../wine/WineRecord';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { getAllWines } from '../../actions/wineService';
import arrowSpinner from '../../components/common/arrowSpinner.gif';

class AllWines extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wines: [],
      isRedWine: this.props.isRedWine,
      loading: true
    };
  }

  componentDidMount() {
    getAllWines(this.props.isRedWine)
      .then(response => {
        this.setState({
          wines: response,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          wines: [],
          error: error,
          loading: false
        });
      });
  }

  render() {
    const { wines, isRedWine, loading } = this.state;

    return (
      <Container>
        <React.Fragment>
          <h2 className="text-center p-4">
            All {isRedWine && isRedWine ? 'Red' : 'White'} Wines
          </h2>
          {loading === true && <div className="text-center p-4"><img  src={arrowSpinner} alt="Loading..." /></div>}
          {wines &&
            wines.map(wine => (
              <WineRecord
                isRedWine={isRedWine}
                key={wine.varietal + wine.world}
                wine={wine}
              />
            ))}
        </React.Fragment>
      </Container>
    );
  }
}

AllWines.propTypes = {
  wines: PropTypes.array.isRequired,
  getAllWines: PropTypes.func.isRequired,
  isRedWine: PropTypes.bool.isRequired
};

AllWines.defaultProps = {
  isRedWine: false
};

const mapStateToProps = state => ({
  wines: state.wine.wines
});

export default connect(
  mapStateToProps,
  { getAllWines }
)(AllWines);
