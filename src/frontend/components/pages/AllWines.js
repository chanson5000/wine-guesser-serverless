import React, { Component } from 'react';
import WineRecord from '../wine/WineRecord';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { getAllWines } from '../../actions/wineActions';

class AllWines extends Component {
  componentDidMount() {
    this.props.getAllWines(this.props.isRedWine);
  }

  render() {
    const { wines, isRedWine } = this.props;

    return (
      <Container>
        <React.Fragment>
          <h2 className="text-center p-4">
            All {isRedWine ? 'Red' : 'White'} Wines
          </h2>
          {wines.error && 'There was an error'}
          {wines.map(wine => (
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
