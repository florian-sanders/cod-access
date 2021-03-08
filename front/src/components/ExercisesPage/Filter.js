import React from 'react';
import PropTypes from 'prop-types';
import ThemeCheckBox from './ThemeCheckBox';

import './styles.scss';

const Filter = ({
  visibility,
  themes,
  toggleFilter,
  validateFilter,
  handleCheckbox,
}) => (
  <>
    <button type="button" className="exercises__filter--btn" onClick={toggleFilter}>Thèmes</button>
    {
      visibility && (
        <fieldset className="exercises__filter">
          <legend className="exercises__filter__legend">Thèmes</legend>
          <ul>
            {
              themes.map((theme) => (
                <ThemeCheckBox theme={theme} key={theme.id} handleCheckbox={handleCheckbox} />
              ))
            }
          </ul>
          <button type="button" className="exercises__filter__btn--valid" onClick={validateFilter}>Valider</button>
        </fieldset>
      )
    }
  </>
);

Filter.propTypes = {
  themes: PropTypes.array,
  visibility: PropTypes.bool,
  toggleFilter: PropTypes.func,
  validateFilter: PropTypes.func.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  themes: [],
  visibility: false,
  toggleFilter: () => {},
};

export default Filter;
