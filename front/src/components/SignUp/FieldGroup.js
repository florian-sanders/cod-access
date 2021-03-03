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
}) => (
  <div className="signup__content__form__group">
    <label htmlFor={id} className="signup__content__form__group__label">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={(evt) => onChange(evt.target.value, name)}
      className="signup__content__form__group__input"
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
};

FieldGroup.defaultProps = {
  value: '',
  onChange: () => { },
};

export default FieldGroup;
