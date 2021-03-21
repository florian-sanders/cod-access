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
  message,
  validateInput,
  checkEmptyField,
}) => {
  const handleOnBlur = (valueToTest) => {
    if (!valueToTest && isMandatory) {
      checkEmptyField({
        name,
        message,
        value: valueToTest,
      });
    }
    if (valueToTest) {
      validateInput({
        value: valueToTest,
        message,
      });
    }
  };

  return (
    <div className="header-wrapper__connection__toggle-area__form__group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autocomplete}
        className="form-input"
        onChange={
          (evt) => changeValue({
            value: evt.target.value,
            name,
          })
        }
        onBlur={(event) => handleOnBlur(event.target.value)}
      />
      {
        message && (
          <p className="message--warning">{message}</p>
        )
      }
    </div>
  );
};

FieldGroup.propTypes = {
  id: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
  changeValue: Proptypes.func.isRequired,
  type: Proptypes.string,
  autocomplete: Proptypes.string,
  isMandatory: Proptypes.bool,
  name: Proptypes.string.isRequired,
  checkEmptyField: Proptypes.func.isRequired,
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
