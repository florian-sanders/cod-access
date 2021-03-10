import {
  ON_CHANGE_TEXT_EMAIL,
  ON_CHANGE_TEXT_PASS,
  NEW_PASSWORD,
} from 'src/actions/forget';

const initialState = {
  email: '',
  password: '',
  passwordConfirm: '',
};

const forget = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_CHANGE_TEXT_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case ON_CHANGE_TEXT_PASS:
      return {
        ...state,
        password: action.payload,
        passwordConfirm: action.payload2,
      };
    default:
      return state;
  }
};

export default forget;
