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
  autocomplete,
  isMandatory,
  setControlMessage,
  message,
  validateInput,
}) => {
  const handleOnBlur = (valueToTest) => {
    if (!valueToTest && isMandatory) {
      setControlMessage({
        name,
        message,
        value,
      });
    }
    if (valueToTest) {
      validateInput({ value, message });
    }
  };

  return (
    <div className="signup__content__form__group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {
        type !== 'textarea'
          ? (
            <input
              type={type}
              name={name}
              id={id}
              value={value}
              onChange={(evt) => onChange(evt.target.value, name)}
              className="form-input"
              aria-required="true"
              onBlur={(evt) => handleOnBlur(evt.target.value)}
              autoComplete={autocomplete}
            />
          )
          : (
            <textarea
              name={name}
              id={id}
              value={value}
              onChange={(evt) => onChange(evt.target.value, name)}
              className="form-input textarea"
              aria-required="true"
              onBlur={(evt) => handleOnBlur(evt.target.value)}
            />
          )
      }
      {
        message && (
          <p className="message">{message}</p>
        )
      }
    </div>
  );
};

FieldGroup.propTypes = {
  id: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  type: Proptypes.string,
  autocomplete: Proptypes.string,
  isMandatory: Proptypes.bool,
  name: Proptypes.string.isRequired,
  setControlMessage: Proptypes.func.isRequired,
  message: Proptypes.string.isRequired,
  validateInput: Proptypes.func,
};

FieldGroup.defaultProps = {
  type: 'text',
  isMandatory: false,
  autocomplete: 'off',
  validateInput: () => { },
};

export default FieldGroup;
