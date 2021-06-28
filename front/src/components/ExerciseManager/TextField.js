import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

const TextField = ({
  value,
  changeValue,
  id,
  label,
  type,
  autocomplete,
  className,
  name,
  saveOnBlur,
  isSaved,
}) => {
  const handleOnBlur = () => {
    if (!isSaved) {
      saveOnBlur({
        name,
        value,
      });
    }
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {
        type !== 'textarea'
          ? (
            <input
              id={id}
              className="form-input large"
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
              onBlur={handleOnBlur}
            />
          )
          : (
            <textarea
              className="full textarea"
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
              onBlur={handleOnBlur}
            />
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
  className: Proptypes.string,
  saveOnBlur: Proptypes.func,
  isSaved: Proptypes.bool,
};

TextField.defaultProps = {
  type: 'text',
  autocomplete: 'off',
  className: '',
  isSaved: false,
  saveOnBlur: () => { },
};

export default TextField;
