export const SET_EXERCISE_MANAGER_THEMES = 'SET_EXERCISE_MANAGER_THEMES';

export const setExerciseManagerThemes = (themes) => ({
  type: SET_EXERCISE_MANAGER_THEMES,
  themes,
});

export const SET_EXERCISE_MANAGER_LOADING = 'SET_EXERCISE_MANAGER_LOADING';

export const setExerciseManagerLoading = (status) => ({
  type: SET_EXERCISE_MANAGER_LOADING,
  status,
});

export const SET_EXERCISE_MANAGER_UPDATE_LOADING = 'SET_EXERCISE_MANAGER_UPDATE_LOADING';

export const setExerciseManagerUpdateLoading = (status) => ({
  type: SET_EXERCISE_MANAGER_UPDATE_LOADING,
  status,
});

export const SET_EXERCISE_MANAGER_ERROR = 'SET_EXERCISE_MANAGER_ERROR';

export const setExerciseManagerError = (status) => ({
  type: SET_EXERCISE_MANAGER_ERROR,
  status,
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

export const POST_EXERCISE_MANAGER = 'POST_EXERCISE_MANAGER';

export const postExerciseManager = () => ({
  type: POST_EXERCISE_MANAGER,
});

export const PATCH_EXERCISE_MANAGER = 'PATCH_EXERCISE_MANAGER';

export const patchExerciseManager = () => ({
  type: PATCH_EXERCISE_MANAGER,
});

export const SET_EXERCISE_MANAGER_IS_SAVED = 'SET_EXERCISE_MANAGER_IS_SAVED';

export const setExerciseManagerIsSaved = (status) => ({
  type: SET_EXERCISE_MANAGER_IS_SAVED,
  status,
});

export const SET_EXERCISE_MANAGER = 'SET_EXERCISE_MANAGER';

export const setExerciseManager = (exercise) => ({
  type: SET_EXERCISE_MANAGER,
  exercise,
});
