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
      saveOnBlur();
    }
  };

  return (
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
              onBlur={handleOnBlur}
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
  accept: Proptypes.string,
};

TextField.defaultProps = {
  type: 'text',
  accept: '',
};

export default TextField;
