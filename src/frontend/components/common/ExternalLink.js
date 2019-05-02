import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ url, text, newWindow, isButton }) => {
  if (newWindow) {
    return (
      <a href={url} className={isButton && 'btn link-button m-2'} rel="noopener noreferrer" target="_blank">
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
  newWindow: PropTypes.bool,
  isButton: PropTypes.bool
};

export default ExternalLink;
