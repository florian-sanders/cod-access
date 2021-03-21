import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ProgressBar = ({ percentage, color }) => {
  const styleProgressBar = {
    width: percentage,
    backgroundColor: color,
  };
  return (
    <div style={{ borderColor: color }} className="profile__progress__scores__theme__score__bar">
      <div style={styleProgressBar} className="profile__progress__scores__theme__score__bar__filler">{percentage} </div>
    </div>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProgressBar;
