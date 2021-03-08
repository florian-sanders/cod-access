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
}) => (
  <div className="header-wrapper__connection__toggle-area__form__group">
    <label htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      autoComplete={autocomplete}
      onChange={
        (evt) => changeValue(evt.target.value)
      }
    />
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
