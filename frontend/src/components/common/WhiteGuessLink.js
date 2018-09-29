import React from 'react';
import {Link} from 'react-router-dom';
import whiteGlass from './white-glass-full.png';

export default () => {
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
};
