import React from 'react';
import PropTypes from 'prop-types';
import ThemeCheckBox from './ThemeCheckBox';

import './styles.scss';

const Filter = ({
  visibility,
  themes,
  toggleFilter,
  setThemesFilter,
}) => {
  const handleCheckbox = (themeId) => {
    const themesModified = themes.map((theme) => {
      if (themeId === theme.id) {
        console.log('checck', theme.checked);
        return {
          ...theme,
          checked: !theme.checked,
        };
      }
      return theme;
    });
    console.log('theme modifies', themesModified);
    setThemesFilter(themesModified);
  };

  return (
    <>
      <button type="button" className="exercises__filter--btn" onClick={toggleFilter}>Thèmes</button>
      {
        visibility && (
          <fieldset className="exercises__filter">
            <legend className="exercises__filter__legend">Thèmes</legend>
            {
              themes.map((theme) => (
                <ThemeCheckBox theme={theme} key={theme.id} onCheckbox={handleCheckbox} />
              ))
            }
            <button type="button" className="exercises__filter__btn--valid" onClick={toggleFilter}>Valider</button>
          </fieldset>
        )
      }
    </>
  );
};

Filter.propTypes = {
  themes: PropTypes.array,
  visibility: PropTypes.bool,
  toggleFilter: PropTypes.func,
  setThemesFilter: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  themes: [],
  visibility: false,
  toggleFilter: () => {},
};

export default Filter;
