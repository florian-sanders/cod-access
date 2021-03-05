import {
  SET_THEMES_EXERCISES,
  SET_EXERCISESPAGE_LOADING,
  TOGGLE_FILTER_THEME_VISIBILITY,
  SET_THEMES_FILTER,
} from 'src/actions/exercises';

const initialState = {
  allThemesExercises: [],
  loadingExercisesPage: false,
  themeFilterVisibility: false,
  themesFilter: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_THEMES_EXERCISES:
      return {
        ...state,
        allThemesExercises: action.data,
      };
    case SET_EXERCISESPAGE_LOADING:
      return {
        ...state,
        loadingExercisesPage: action.loadingExercisesPage,
      };
    case TOGGLE_FILTER_THEME_VISIBILITY:
      return {
        ...state,
        themeFilterVisibility: !state.themeFilterVisibility,
      };
    case SET_THEMES_FILTER:
      return {
        ...state,
        themesFilter: action.newThemesFilter,
      };
    default:
      return state;
  }
};

export default reducer;
