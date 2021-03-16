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
  isMandatory,
  name,
  setControlMessage,
  validateEmail,
  message,
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
        (evt) => changeValue({
          value: evt.target.value,
          name,
        })
      }
      onBlur={(event) => {
        if (isMandatory) {
          setControlMessage({
            name,
            message,
            value,
          });
        }
        if (event.target.value) {
          validateEmail({
            message,
            value,
          });
        }
      }}
    />
    {
      message && (
        <p>{message}</p>
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
  autocomplete: Proptypes.string,
  isMandatory: Proptypes.bool,
  name: Proptypes.string.isRequired,
  setControlMessage: Proptypes.func.isRequired,
  message: Proptypes.string.isRequired,
  validateEmail: Proptypes.func.isRequired,
};

FieldGroup.defaultProps = {
  type: 'text',
  isMandatory: false,
  autocomplete: 'off',
};

export default FieldGroup;
