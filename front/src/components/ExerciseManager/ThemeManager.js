import React from 'react';

import Checkbox from './Checkbox';
import './styles.scss';

const ThemeManager = ({
  themes,
  patchThemeUpdate,
  updateThemeState,
}) => (
  <fieldset className="admin-exercise__general-info__themes">
    <legend>Thématiques</legend>
    {
      themes.map((theme) => (
        <Checkbox
          className="admin-exercise__general-info__field-group"
          id={`theme-${theme.id}`}
          label={theme.name}
          type="checkbox"
          name={theme.id.toString()}
          key={`theme-${theme.id}`}
          saveCheckboxChange={patchThemeUpdate}
          updateState={updateThemeState}
          value={theme.checked}
        />
      ))
    }
  </fieldset>
);

export default ThemeManager;
