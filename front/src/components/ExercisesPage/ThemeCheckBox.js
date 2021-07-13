import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ThemeCheckBox = ({ theme, handleCheckbox }) => (
  <li className="exercises__wrapper__header__intro__filter__item">
    <input
      type="checkbox"
      id={theme.id}
      name={theme.name}
      value={theme.id}
      className="exercises__wrapper__header__intro__filter__item__checkbox"
      onChange={() => handleCheckbox(theme.id, theme.checked)}
      checked={theme.checked}
    />
    <label htmlFor={theme.id} className="exercises__wrapper__header__intro__filter__item__label">{theme.name} ({theme.count} challenges)</label>
  </li>
);

ThemeCheckBox.propTypes = {
  theme: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
  }),
  handleCheckbox: PropTypes.func.isRequired,
};

ThemeCheckBox.defaultProps = {
  theme: {},
};

export default ThemeCheckBox;
