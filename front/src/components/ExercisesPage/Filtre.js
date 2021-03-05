import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Filtre = ({ visibility, themes, toggleFilter }) => (
  <>
    <button type="button" className="exercises__filter--btn" onClick={toggleFilter}>Thèmes</button>
    {
      visibility && (
        <fieldset className="exercises__filter">
          <legend className="exercises__filter__legend">Thèmes</legend>
          {
            themes.map((theme) => (
              <div className="exercises__filter__item">
                <input type="checkbox" id={theme.id} name={theme.name} value={theme.id} className="exercises__filter__item__checkbox" />
                <label htmlFor={theme.id} className="exercises__filter__item__label">{theme.name} </label>
              </div>
            ))
          }
          <button type="button" className="exercises__filter__btn--valid" onClick={toggleFilter}>Valider</button>
        </fieldset>
      )
    }
  </>
);

Filtre.propTypes = {
  themes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  visibility: PropTypes.bool,
  toggleFilter: PropTypes.func,
};

Filtre.defaultProps = {
  themes: [],
  visibility: false,
  toggleFilter: () => {},
};

export default Filtre;
