import {
  SET_SIGN_UP_FIELD_VALUE,
  SET_SIGN_UP_LOADING,
  SIGN_UP,
} from 'src/actions/signup';

const initialState = {
  name: '',
  value: '',
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
  loading: false,
  isSignedUp: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        name: '',
        value: '',
        pseudo: '',
        email: '',
        password: '',
        passwordConfirm: '',
        isSignedUp: true,
      };
    case SET_SIGN_UP_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_SIGN_UP_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
