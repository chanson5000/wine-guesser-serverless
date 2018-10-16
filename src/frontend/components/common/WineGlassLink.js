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
        <Link to="/guess-red">
          <img
              src={redGlass}
              alt="Guess a red wine."
          />
        </Link>
    );
  } else {
    return (
        <Link to="/guess-white">
          <img
              src={whiteGlass}
              alt="Guess a white wine."
          />
        </Link>
    );
  }
};

WineGlassLink.proptypes = {
  isRedWine: PropTypes.bool
};

export default WineGlassLink;