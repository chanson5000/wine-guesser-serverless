import React, { Component } from 'react';
import RedWineRecord from '../wine/RedWineRecord';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { getRedWines } from '../../actions/redWineActions';

class ShowAllRedWines extends Component {
  componentDidMount() {
    this.props.getRedWines();
  }

  render() {
    const { wines } = this.props;

    return (
      <Container>
        <h2 className="text-center p-2">All Red Wines</h2>

        {wines.map(wine => (
          <RedWineRecord key={wine.varietal + wine.world} wine={wine} />
        ))}
      </Container>
    );
  }
}

ShowAllRedWines.propTypes = {
  wines: PropTypes.array.isRequired,
  getRedWines: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  wines: state.wine.wines
});

export default connect(
  mapStateToProps,
  { getRedWines }
)(ShowAllRedWines);
