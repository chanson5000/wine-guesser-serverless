import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { deleteWine } from '../../actions/WineRestService';

export default function WineCard(wine, onWineDeleted, isRedWine) {
  const { varietal, world, description, descriptors } = wine;
  async function onDeleteClick(event, wine, isRedWine = false) {
    event.preventDefault();
    await deleteWine(wine, isRedWine);
    onWineDeleted();
  }

  return (
    <div className="card card-body mb-3">
      <h3>
        {varietal}
        <i
          className="fas fa-times"
          onClick={e => onDeleteClick(e, wine, isRedWine)}
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

WineCard.propTypes = {
  wine: PropTypes.object.isRequired,
  isRedWine: PropTypes.bool.isRequired,
  onWineDeleted: PropTypes.func.isRequired
};

WineCard.defaultProps = {
  isRedWine: false
};
