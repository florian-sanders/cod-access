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
  validateInput,
  message,
  isMandatory,
  checkEmptyField,
}) => {
  const handleOnBlur = (valueToTest) => {
    if (!valueToTest && isMandatory) {
      checkEmptyField({
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
        onBlur={(evt) => handleOnBlur(evt.target.value)}
        aria-required="true"
      />
      {
        message && (
          <p>{message}</p>
        )
      }
    </div>
  );
};

FieldGroup.propTypes = {
  id: Proptypes.string.isRequired,
  value: Proptypes.string,
  label: Proptypes.string.isRequired,
  onChange: Proptypes.func,
  type: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  placeholder: Proptypes.string,
  validateInput: Proptypes.func,
  message: Proptypes.string.isRequired,
  isMandatory: Proptypes.bool,
  checkEmptyField: Proptypes.func.isRequired,
};

FieldGroup.defaultProps = {
  value: '',
  isMandatory: false,
  onChange: () => { },
  placeholder: '',
  validateInput: () => { },
};

export default FieldGroup;
