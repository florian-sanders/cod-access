import {
  TOGGLE_MENU_VISIBILITY,
  TOGGLE_FILTER_THEME_VISIBILITY,
} from 'src/actions/other';

const initialState = {
  mobileMenuVisibility: false,
  themeFilterVisibility: false,
};

const other = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU_VISIBILITY:
      return {
        ...state,
        mobileMenuVisibility: !state.mobileMenuVisibility,
      };
    case TOGGLE_FILTER_THEME_VISIBILITY:
      return {
        ...state,
        themeFilterVisibility: !state.themeFilterVisibility,
      };
    default:
      return state;
  }
};

export default other;
