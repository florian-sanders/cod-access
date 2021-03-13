import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ProgressBar = ({percentage}) => (
  <div className="progress-bar">
    <div style={{ width: '60%' }} className="progress-bar__filler" />
  </div>
);

export default ProgressBar;
