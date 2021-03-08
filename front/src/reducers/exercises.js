import {
  SET_THEMES_EXERCISES,
  SET_EXERCISESPAGE_LOADING,
  TOGGLE_FILTER_THEME_VISIBILITY,
  SET_ALL_THEMES_FILTER_CHECKBOX,
  SET_THEME_CHECKBOX,
  SET_THEMES_ID_TO_DISPLAY,
} from 'src/actions/exercises';

const initialState = {
  allThemesExercises: [],
  loadingExercisesPage: false,
  themeFilterVisibility: false,
  themesFilterCheckbox: [],
  themesIdToDisplay: [2, 3, 6],
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
        loadingExercisesPage: action.loading,
      };
    case TOGGLE_FILTER_THEME_VISIBILITY:
      return {
        ...state,
        themeFilterVisibility: !state.themeFilterVisibility,
      };
    case SET_ALL_THEMES_FILTER_CHECKBOX:
      return {
        ...state,
        themesFilterCheckbox: action.newThemesFilter,
      };
    case SET_THEME_CHECKBOX:
      return {
        ...state,
        themesFilterCheckbox:
          state.themesFilterCheckbox.map(
            (theme) => (
              theme.id === action.idTheme
                ? {
                  ...theme,
                  checked: !action.checked,
                }
                : theme
            ),
          ),
      };
    case SET_THEMES_ID_TO_DISPLAY:
      return {
        ...state,
        themesIdToDisplay:
        state.themesFilterCheckbox.filter((theme) => theme.checked)
          .map((theme) => theme.id).length === 0
          ? state.themesFilterCheckbox.map((theme) => theme.id)
          : state.themesFilterCheckbox.filter((theme) => theme.checked).map((theme) => theme.id),
      };
    default:
      return state;
  }
};

export default reducer;
