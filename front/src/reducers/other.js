import {
  TOGGLE_MENU_VISIBILITY,
  SET_THEMES,
} from 'src/actions/other';

const initialState = {
  mobileMenuVisibility: false,
  themes: {
    loading: true,
    data: [],
  },
};

const other = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_THEMES:
      return {
        ...state,
        themes: {
          loading: false,
          data: action.themes,
        },
      };
    case TOGGLE_MENU_VISIBILITY:
      return {
        ...state,
        mobileMenuVisibility: !state.mobileMenuVisibility,
      };
    default:
      return state;
  }
};

export default other;
