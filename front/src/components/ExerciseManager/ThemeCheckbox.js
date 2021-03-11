import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ThemeCheckBox = ({
  theme,
  handleCheckbox,
  saveOnBlur,
  isSaved,
}) => {
  const handleOnBlur = () => {
    if (!isSaved) {
      saveOnBlur(theme.id);
    }
  };
  return (
    <>
      <input
        type="checkbox"
        id={theme.id}
        name={theme.name}
        value={theme.id}
        className="exercises__filter__item__checkbox"
        onChange={() => handleCheckbox(theme.id)}
        onBlur={() => handleOnBlur()}
        checked={theme.checked}
      />
      <label htmlFor={theme.id} className="exercises__filter__item__label">
        {theme.name}
      </label>
    </>
  );
};
ThemeCheckBox.propTypes = {
  theme: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  handleCheckbox: PropTypes.func.isRequired,
};

export default ThemeCheckBox;
