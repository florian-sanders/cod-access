import {
  SET_EXERCISE_MANAGER,
  SET_EXERCISE_MANAGER_FIELD_VALUE,
  SET_EXERCISE_MANAGER_THEMES,
  SET_EXERCISE_MANAGER_LOADING,
  SET_EXERCISE_MANAGER_UPDATE_LOADING,
  SET_EXERCISE_MANAGER_ERROR,
  TOGGLE_EXERCISE_MANAGER_THEME,
  SET_EXERCISE_MANAGER_IS_SAVED,
} from 'src/actions/exerciseManager';

const initialState = {
  loading: true,
  updateLoading: false,
  error: false,
  published: false,
  id: null,
  title: '',
  brief: '',
  themes: [],
  isSaved: false,
};

const exerciseManager = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_EXERCISE_MANAGER:
      return {
        ...state,
        ...action.exercise,
      };
    case SET_EXERCISE_MANAGER_ERROR:
      return {
        ...state,
        error: action.status,
      };
    case SET_EXERCISE_MANAGER_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    case SET_EXERCISE_MANAGER_UPDATE_LOADING:
      return {
        ...state,
        updateLoading: action.status,
      };
    case SET_EXERCISE_MANAGER_FIELD_VALUE:
      return {
        ...state,
        isSaved: false,
        [action.name]: action.value,
      };
    case SET_EXERCISE_MANAGER_THEMES:
      return {
        ...state,
        themes: action.themes.map((theme) => ({
          ...theme,
          checked: false,
        })),
      };
    case TOGGLE_EXERCISE_MANAGER_THEME:
      return {
        ...state,
        themes: state.themes.map((theme) => {
          const newTheme = { ...theme };

          if (theme.id === action.themeId) {
            newTheme.checked = !theme.checked;
          }

          return newTheme;
        }),
      };
    case SET_EXERCISE_MANAGER_IS_SAVED:
      return {
        ...state,
        isSaved: action.status,
      };
    default:
      return state;
  }
};

export default exerciseManager;
