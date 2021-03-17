import {
  ON_CHANGE_TEXT_EMAIL,
  ON_CHANGE_TEXT_PASS,
  SET_FORGET_CONTROL_MESSAGE,
  VALIDATE_FORGET_EMAIL,

  SET_CONTACT_FIELD_VALUE,
  SET_CONTACT_LOADING,
  CONTACT,
  SET_CONTACT_CONTROL_MESSAGE,
  SET_PASSWORD_CONTROL_MESSAGE,
  VALIDATE_CONTACT_EMAIL,
  VALIDATE_LENGTH,
  VALIDATE_CONTENT_LENGTH,
  VALIDATE_PASSWORD,
  COMPARE_NEW_PASSWORD_CONFIRM,
} from 'src/actions/forget';

const initialState = {
  email: {
    value: '',
    controlMessage: '',
  },
  password: {
    value: '',
    controlMessage: '',
  },
  passwordConfirm: {
    value: '',
    controlMessage: '',
  },

  name: {
    value: '',
    controlMessage: '',
  },
  emailContact: {
    value: '',
    controlMessage: '',
  },
  content: {
    value: '',
    controlMessage: '',
  },
  loading: false,
  isContactDone: false,
};

const forget = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_CHANGE_TEXT_EMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          value: action.payload,
        },
      };
    case ON_CHANGE_TEXT_PASS:
      return {
        ...state,
        password: {
          ...state.password,
          value: action.payload,
        },
        passwordConfirm: {
          ...state.passwordConfirm,
          value: action.payload2,
        },
      };

    case SET_CONTACT_CONTROL_MESSAGE:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          controlMessage: action.message,
        },
      };
    case SET_FORGET_CONTROL_MESSAGE:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          controlMessage: action.message,
        },
      };
    case SET_PASSWORD_CONTROL_MESSAGE:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          controlMessage: action.message,
        },
      };
    case CONTACT:
      return {
        ...initialState,
        isContactDone: true,
      };
    case SET_CONTACT_FIELD_VALUE:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          value: action.value,
        },
      };
    case SET_CONTACT_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case VALIDATE_CONTACT_EMAIL:
      return {
        ...state,
        emailContact: {
          ...state.emailContact,
          controlMessage: action.message,
        },
      };
    case VALIDATE_FORGET_EMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          controlMessage: action.message,
        },
      };
    case VALIDATE_LENGTH:
      return {
        ...state,
        name: {
          ...state.name,
          controlMessage: action.message,
        },
      };
    case VALIDATE_CONTENT_LENGTH:
      return {
        ...state,
        content: {
          ...state.content,
          controlMessage: action.message,
        },
      };
    case VALIDATE_PASSWORD:
      return {
        ...state,
        password: {
          ...state.password,
          controlMessage: action.message,
        },
      };
    case COMPARE_NEW_PASSWORD_CONFIRM:
      return {
        ...state,
        passwordConfirm: {
          ...state.passwordConfirm,
          controlMessage: action.message,
        },
      };
    default:
      return state;
  }
};

export default forget;
