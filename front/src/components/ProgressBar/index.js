import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ProgressBar = ({percentage}) => (
  <div className="progress-bar">
    <div style={{ width: percentage }} className="progress-bar__filler" />
  </div>
);

export default ProgressBar;
