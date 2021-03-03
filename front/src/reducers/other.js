import { TOGGLE_MENU_VISIBILITY } from 'src/actions/other';

const initialState = {
  mobileMenuVisibility: false,
};

const other = (state = initialState, action = {}) => {
  switch (action.type) {
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
