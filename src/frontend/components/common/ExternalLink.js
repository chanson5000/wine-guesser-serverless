import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ url, text, newWindow }) => {
  if (newWindow) {
    return (
      <a href={url} rel="noopener noreferrer" target="_blank">
        {text}
      </a>
    );
  } else {
    return (
      <a href={url} rel="noopener noreferrer">
        {text}
      </a>
    );
  }
};

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  newWindow: PropTypes.bool
};

export default ExternalLink;
