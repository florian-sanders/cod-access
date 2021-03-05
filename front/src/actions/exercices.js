export const FETCH_THEMES_EXERCICES = 'FETCH_THEMES_EXERCICES';

export const fetchThemesExercices = () => ({
  type: FETCH_THEMES_EXERCICES,
});

export const SET_THEMES_EXERCICES = 'SET_THEMES_EXERCICES';

export const setThemesExercices = (data) => ({
  type: SET_THEMES_EXERCICES,
  data,
});

export const SET_EXERCICESPAGE_LOADING = 'SET_EXERCICESPAGE_LOADING';

export const setExercicesPageLoading = (loading) => ({
  type: SET_EXERCICESPAGE_LOADING,
  loading,
});
