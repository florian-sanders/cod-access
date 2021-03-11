import React from 'react';

import ThemeCheckbox from './ThemeCheckbox';
import './styles.scss';

const ThemeManager = ({
  saveOnBlur,
  handleThemeCheckbox,
  isSaved,
  themes,
}) => (
  <fieldset className="admin-exercise__general-info__themes">
    <legend>Thématiques</legend>
    {
      themes.map((theme) => (
        <ThemeCheckbox
          className="admin-exercise__general-info__field-group"
          theme={theme}
          type="checkbox"
          name="theme"
          handleCheckbox={handleThemeCheckbox}
          saveOnBlur={saveOnBlur}
          isSaved={isSaved}
          key={theme.id}
        />
      ))
    }
  </fieldset>
);

export default ThemeManager;
