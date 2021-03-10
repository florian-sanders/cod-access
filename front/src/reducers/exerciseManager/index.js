import {
  SET_EXERCISE_MANAGER_FIELD_VALUE,
  SET_EXERCISE_MANAGER_THEMES,
  TOGGLE_EXERCISE_MANAGER_THEME,
} from 'src/actions/exerciseManager';

const initialState = {
  loading: true,
  title: '',
  brief: '',
  published: false,
  themes: [],
};

const exerciseManager = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_EXERCISE_MANAGER_FIELD_VALUE:
      return {
        ...state,
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
    default:
      return state;
  }
};

export default exerciseManager;
