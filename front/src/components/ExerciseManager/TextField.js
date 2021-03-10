import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

const FieldGroup = ({
  value,
  changeValue,
  id,
  label,
  type,
  autocomplete,
  className,
  name,
}) => (
  <div className={className}>
    <label htmlFor={id}>
      {label}
    </label>
    {
      type !== 'textarea'
        ? (
          <input
            id={id}
            type={type}
            value={value}
            autoComplete={autocomplete}
            name={name}
            onChange={
              (evt) => changeValue(evt.target.value, name)
            }
          />
        )
        : (
          <textarea
            id={id}
            value={value}
            autoComplete={autocomplete}
            name={name}
            onChange={
              (evt) => changeValue(evt.target.value, name)
            }
          />
        )
    }
  </div>
);

FieldGroup.propTypes = {
  id: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
  changeValue: Proptypes.func.isRequired,
  type: Proptypes.string,
};

FieldGroup.defaultProps = {
  type: 'text',
};

export default FieldGroup;
