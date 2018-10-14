import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import redGlass from './red-glass-full.png';
import whiteGlass from './white-glass-full.png';

const WineGlassLink = ({
                         isRedWine
                       }) => {
  if (isRedWine) {
    return (
        <div>
          <Link to="/guess-red">
            <img
                src={redGlass}
                alt="Guess a red wine."
            />
          </Link>
        </div>
    );
  } else {
    return (
        <div>
          <Link to="/guess-white">
            <img
                src={whiteGlass}
                alt="Guess a white wine."
            />
          </Link>
        </div>
    );
  }
};

WineGlassLink.proptypes = {
  isRedWine: PropTypes.bool
};

export default WineGlassLink;
