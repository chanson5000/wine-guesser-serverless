import React from 'react';

import redGlass from './red-glass-full.png';

export default () => {
  return (
      <div>
        <a href="/guess-red">
          <img
              src={redGlass}
              alt="Guess a red wine."
          />
        </a>
      </div>
  );
};
