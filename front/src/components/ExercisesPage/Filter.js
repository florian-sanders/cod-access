import React from 'react';
import PropTypes from 'prop-types';
import ThemeCheckBox from './ThemeCheckBox';
import classNames from 'classnames';

import './styles.scss';

const Filter = ({
  visibility,
  themes,
  toggleFilter,
  validateFilter,
  handleCheckbox,
}) => (
  <>
    {/* <button type="button" className="exercises__wrapper__filter--btn" onClick={toggleFilter}>Thèmes</button> */}
    <button
      type="button"
      className={classNames('exercises__wrapper__filter__btn', {
        'exercises__wrapper__filter__btn--visible': visibility,
      })}
      onClick={toggleFilter}
    >Thèmes
    </button>
    {
      visibility && (
        <fieldset className="exercises__wrapper__filter">
          <legend className="exercises__wrapper__filter__legend">Thèmes</legend>
          <ul>
            {
              themes.map((theme) => (
                <ThemeCheckBox theme={theme} key={theme.id} handleCheckbox={handleCheckbox} />
              ))
            }
          </ul>
          <button type="button" className="exercises__wrapper__filter__btn--valid button--secondary" onClick={validateFilter}>Valider</button>
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
