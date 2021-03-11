import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

const CheckboxRadio = ({
  value,
  changeValue,
  id,
  label,
  type,
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
      <input
        id={id}
        type={type}
        checked={value}
        name={name}
        onChange={
          (evt) => changeValue(evt.target.checked, name)
        }
        onBlur={handleOnBlur}
      />
      <label htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

CheckboxRadio.propTypes = {
  id: Proptypes.string.isRequired,
  value: Proptypes.bool.isRequired,
  label: Proptypes.string.isRequired,
  changeValue: Proptypes.func.isRequired,
  type: Proptypes.string,
};

CheckboxRadio.defaultProps = {
  type: 'text',
};

export default CheckboxRadio;
