import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

const Checkbox = ({
  value,
  id,
  label,
  type,
  className,
  name,
  saveCheckboxChange,
  updateState,
}) => (
  <div className={className}>
    <input
      id={id}
      type={type}
      checked={value}
      onChange={() => {
        saveCheckboxChange({
          name,
          value: !value,
        });
        updateState({
          name,
          value: !value,
        });
      }}
    />
    <label htmlFor={id}>
      {label}
    </label>
  </div>
);

Checkbox.propTypes = {
  id: Proptypes.string.isRequired,
  value: Proptypes.bool.isRequired,
  label: Proptypes.string.isRequired,
  type: Proptypes.string,
  className: Proptypes.string,
  name: Proptypes.string.isRequired,
};

Checkbox.defaultProps = {
  type: 'checkbox',
  className: '',
};

export default Checkbox;
