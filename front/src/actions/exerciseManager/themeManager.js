export const SET_THEME_MANAGER_UPDATE_LOADING = 'SET_THEME_MANAGER_UPDATE_LOADING';

export const setThemeManagerUpdateLoading = (status) => ({
  type: SET_THEME_MANAGER_UPDATE_LOADING,
  status,
});

export const SET_THEME_MANAGER_ERROR = 'SET_THEME_MANAGER_ERROR';

export const setThemeManagerError = (status) => ({
  type: SET_THEME_MANAGER_ERROR,
  status,
});

export const SET_THEME_MANAGER_LOADING = 'SET_THEME_MANAGER_LOADING';

export const setThemeManagerLoading = (status) => ({
  type: SET_THEME_MANAGER_LOADING,
  status,
});

export const SET_THEME_MANAGER_IS_SAVED = 'SET_THEME_MANAGER_IS_SAVED';

export const setThemeManagerIsSaved = (status) => ({
  type: SET_THEME_MANAGER_IS_SAVED,
  status,
});

export const UPDATE_THEME_MANAGER = 'UPDATE_THEME_MANAGER';

export const updateThemeManager = ({ themeId, isChecked }) => ({
  type: UPDATE_THEME_MANAGER,
  themeId,
  isChecked,
});

export const SET_THEME_MANAGER_FIELD_VALUE = 'SET_THEME_MANAGER_FIELD_VALUE';

export const setThemeManagerFieldValue = ({ themeId, isChecked }) => ({
  type: SET_THEME_MANAGER_FIELD_VALUE,
  themeId,
  isChecked,
});

export const SET_THEME_MANAGER_CHECKBOXES = 'SET_THEME_MANAGER_CHECKBOXES';

export const setThemeManagerCheckboxes = (themes) => ({
  type: SET_THEME_MANAGER_CHECKBOXES,
  themes,
});
