import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WineGlassLink from '../common/WineGlassLink';

class Landing extends Component {
  render() {
    return (
      <div className="container p-4 text-center">
        <h2>Guess a wine.</h2>
        <div className="row justify-content-center">
          <div className="col-auto">
            <WineGlassLink isRedWine={true} />
          </div>
          <div className="col-auto">
            <WineGlassLink isRedWine={false} />
          </div>
        </div>
        <div>
          <Link to="/administration">Administration</Link>
        </div>
      </div>
    );
  }
}

export default Landing;
