import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class WineDetail extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {varietal, world} = this.props.match.params;

    return (
      <div className="container p-4 text-center">
        <h2>Wine Details</h2>
        <h3>{varietal}</h3>
        <h4>{world.charAt(0).toUpperCase() + world.slice(1)} World</h4>
      </div>
    );
  }
}

WineDetail.propTypes = {
  isRedWine: Proptypes.bool.isRequired,
  match: Proptypes.any
};

WineDetail.defaultProps = {
  isRedWine: false
};

export default connect()(WineDetail);
