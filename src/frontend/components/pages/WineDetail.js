import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { getWine } from '../../actions/WineRestService';

class WineDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptors: null,
      description: null,
      confusion: null
    };
  }

  componentDidMount() {
    this.loadWine();
  }

  loadWine = () => {
    const wine = {
      varietal: this.props.match.params.varietal,
      world: this.props.match.params.world
    };
    console.log('Calling getWine with:');
    console.log(wine);
    getWine(wine, this.props.isRedWine).then(response => {
      this.setState({
        descriptors: response.descriptors,
        description: response.description,
        confusion: response.confusion
      });
    }).catch(error => {
      this.setState({
        description: 'Unable to retrieve wine details.'
      });
      console.log(error);
    });
  };

  render() {
    const { varietal, world } = this.props.match.params;
    const { descriptors, description, confusion } = this.state;

    return (
      <div className="container p-4 text-center">
        <h2>Wine Details</h2>
        <h3>{varietal}</h3>
        <h4>{world.charAt(0).toUpperCase() + world.slice(1)} World</h4>
        {description && <p>{description}</p>}
        {confusion && <p>{confusion}</p>}
        <div className="card card-body mb-3">
          <ul>
            {descriptors &&
              Object.keys(descriptors).map(descriptor => (
                <li key={descriptor}>{descriptor}</li>
              ))}
          </ul>
        </div>
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
