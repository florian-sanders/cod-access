import {
  TOGGLE_CONNECTION_VISIBILITY,
  SET_FIELD_VALUE,
} from 'src/actions/auth';

const initialState = {
  email: '',
  password: '',
  isVisible: false,
};

const reducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case TOGGLE_CONNECTION_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case SET_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
