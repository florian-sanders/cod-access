import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

const FieldGroup = ({
  id,
  value,
  label,
  onChange,
  type,
  name,
  placeholder,
}) => (
  <div className="">
    <label htmlFor={id} className="label">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={(evt) => onChange(evt.target.value, name)}
      className="input"
      aria-required="true"
    />
  </div>
);

FieldGroup.propTypes = {
  id: Proptypes.string.isRequired,
  value: Proptypes.string,
  label: Proptypes.string.isRequired,
  onChange: Proptypes.func,
  type: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  placeholder: Proptypes.string,
};

FieldGroup.defaultProps = {
  value: '',
  onChange: () => { },
  placeholder: '',
};

export default FieldGroup;
