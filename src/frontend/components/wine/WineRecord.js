import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteWine } from '../../actions/WineRestService';

class WineRecord extends Component {
  onDeleteClick = (wine, isRedWine = false) => {
    try {
      deleteWine(wine, isRedWine);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { wine, isRedWine } = this.props;
    const { varietal, world, description, descriptors } = wine;

    return (
      <div className="card card-body mb-3">
        <h3>
          {varietal}
          <i
            className="fas fa-times"
            onClick={this.onDeleteClick.bind(this, wine, isRedWine)}
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          />
        </h3>
        <h4>World {world}</h4>
        <p>{description}</p>
        <ul>
          {descriptors &&
            Object.keys(descriptors).map(descriptor => (
              <li key={descriptor}>{descriptor}</li>
            ))}
        </ul>
      </div>
    );
  }
}

WineRecord.propTypes = {
  wine: PropTypes.object.isRequired,
  isRedWine: PropTypes.bool.isRequired,
  deleteWine: PropTypes.func.isRequired
};

WineRecord.defaultProps = {
  isRedWine: false
};

export default connect(
)(WineRecord);
