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

export const SET_THEMES_FILTER = 'SET_THEMES_FILTER';

export const setThemesFilter = (newThemesFilter) => ({
  type: SET_THEMES_FILTER,
  newThemesFilter,
});
