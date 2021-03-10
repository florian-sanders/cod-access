import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ThemeCheckBox = ({ theme, handleCheckbox }) => (
  <>
    <input
      type="checkbox"
      id={theme.id}
      name={theme.name}
      value={theme.id}
      className="exercises__filter__item__checkbox"
      onChange={() => handleCheckbox(theme.id)}
      checked={theme.checked}
    />
    <label htmlFor={theme.id} className="exercises__filter__item__label">
      {theme.name}
    </label>
  </>
);

ThemeCheckBox.propTypes = {
  theme: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }),
  handleCheckbox: PropTypes.func.isRequired,
};

ThemeCheckBox.defaultProps = {
  theme: {},
};

export default ThemeCheckBox;
