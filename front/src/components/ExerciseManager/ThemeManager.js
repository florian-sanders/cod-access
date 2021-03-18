import React from 'react';

import Checkbox from './Checkbox';
import './styles.scss';

const ThemeManager = ({
  themes,
  patchThemeUpdate,
  updateThemeState,
}) => (
  <fieldset className="admin-exercise__form__general-info__themes">
    <legend>Thématiques</legend>
    <div className="admin-exercise__form__general-info__themes__checkbox">
      {
        themes.map((theme) => (
          <Checkbox
            className="admin-exercise__form__general-info__themes__checkbox__field-group"
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
    </div>
  </fieldset>
);

export default ThemeManager;
