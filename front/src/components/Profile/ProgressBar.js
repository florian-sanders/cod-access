import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ProgressBar = ({ percentage, color }) => (
  <div style={{ borderColor: color }} className="profile__progress__theme__bar">
    <div style={{ width: percentage, backgroundColor: color }} className="profile__progress__theme__bar__filler">{percentage} </div>
  </div>
);

ProgressBar.propTypes = {
  percentage: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProgressBar;
