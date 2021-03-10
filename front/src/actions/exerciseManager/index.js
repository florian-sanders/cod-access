export const SET_EXERCISE_MANAGER_THEMES = 'SET_EXERCISE_MANAGER_THEMES';

export const setExerciseManagerThemes = (themes) => ({
  type: SET_EXERCISE_MANAGER_THEMES,
  themes,
});

export const SET_EXERCISE_MANAGER_FIELD_VALUE = 'SET_EXERCISE_MANAGER_FIELD_VALUE';

export const setExerciseManagerFieldValue = (value, name) => ({
  type: SET_EXERCISE_MANAGER_FIELD_VALUE,
  value,
  name,
});

export const TOGGLE_EXERCISE_MANAGER_THEME = 'TOGGLE_EXERCISE_MANAGER_THEME';

export const toggleExerciseManagerTheme = (themeId) => ({
  type: TOGGLE_EXERCISE_MANAGER_THEME,
  themeId,
});

export const SAVE_EXERCISE = 'SAVE_EXERCISE';

export const saveExercise = () => ({
  type: SAVE_EXERCISE,
});
