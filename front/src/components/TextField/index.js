import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';

const TextField = ({
  value,
  changeValue,
  id,
  label,
  type,
  autocomplete,
  inputClassName,
  groupClassName,
  labelClassName,
  name,
  isMandatory,
  setControlMessage,
  message,
  validateInput,
  valueToCompare,
}) => {
  const handleOnBlur = (valueToTest) => {
    if (isMandatory) {
      setControlMessage({
        name,
        message,
        value,
      });
    }
    if (valueToTest) {
      validateInput({ value, message, valueToCompare });
    }
  };

  return (
    <div className={classNames(groupClassName)}>
      <label htmlFor={id} className={classNames('form-label', labelClassName)}>
        {label}
      </label>
      {
        type !== 'textarea'
          ? (
            <input
              id={id}
              className={classNames('form-input', inputClassName)}
              type={type}
              value={value}
              autoComplete={autocomplete}
              name={name}
              onChange={
                (evt) => changeValue({
                  value: evt.target.value,
                  name,
                })
              }
              onBlur={(evt) => handleOnBlur(evt.target.value)}
            />
          )
          : (
            <textarea
              className={classNames('form-input', inputClassName)}
              id={id}
              value={value}
              autoComplete={autocomplete}
              name={name}
              onChange={
                (evt) => changeValue({
                  value: evt.target.value,
                  name,
                })
              }
              onBlur={(evt) => handleOnBlur(evt.target.value)}
            />
          )
      }
      {
        message && (
          <p className="message--warning">{message}</p>
        )
      }
    </div>
  );
};

TextField.propTypes = {
  id: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
  changeValue: Proptypes.func.isRequired,
  type: Proptypes.string,
  name: Proptypes.string.isRequired,
  autocomplete: Proptypes.string,
  groupClassName: Proptypes.string,
  isMandatory: Proptypes.bool,
  setControlMessage: Proptypes.func,
  message: Proptypes.string,
  validateInput: Proptypes.func,
  inputClassName: Proptypes.string,
  labelClassName: Proptypes.string,
};

TextField.defaultProps = {
  type: 'text',
  autocomplete: 'off',
  groupClassName: '',
  inputClassName: '',
  labelClassName: '',
  isMandatory: false,
  setControlMessage: () => { },
  validateInput: () => { },
  message: '',

};

export default TextField;
