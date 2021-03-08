export const FETCH_THEMES_EXERCISES = 'FETCH_THEMES_EXERCISES';

export const fetchThemesExercises = () => ({
  type: FETCH_THEMES_EXERCISES,
});

export const SET_THEMES_EXERCISES = 'SET_THEMES_EXERCISES';

export const setThemesExercises = (data) => ({
  type: SET_THEMES_EXERCISES,
  data,
});

export const SET_EXERCISESPAGE_LOADING = 'SET_EXERCISESPAGE_LOADING';

export const setExercisesPageLoading = (loading) => ({
  type: SET_EXERCISESPAGE_LOADING,
  loading,
});

export const TOGGLE_FILTER_THEME_VISIBILITY = 'TOGGLE_FILTER_THEME_VISIBILITY';

export const toogleFilterThemeVisibility = () => ({
  type: TOGGLE_FILTER_THEME_VISIBILITY,
});

export const SET_ALL_THEMES_FILTER_CHECKBOX = 'SET_ALL_THEMES_FILTER_CHECKBOX';

export const setAllThemesFilterCheckbox = (newThemesFilter) => ({
  type: SET_ALL_THEMES_FILTER_CHECKBOX,
  newThemesFilter,
});

export const SET_THEME_CHECKBOX = 'SET_THEME_CHECKBOX';

export const setThemeCheckbox = (idTheme, checked) => ({
  type: SET_THEME_CHECKBOX,
  idTheme,
  checked,
});

export const SET_THEMES_ID_TO_DISPLAY = 'SET_THEMES_ID_TO_DISPLAY';

export const setThemesIdToDisplay = () => ({
  type: SET_THEMES_ID_TO_DISPLAY,
});
