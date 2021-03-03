import {
  SET_FIELD_VALUE,
} from 'src/actions/signup';

const initialState = {
  name: '',
  value: '',
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};
