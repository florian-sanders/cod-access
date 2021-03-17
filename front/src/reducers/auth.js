import {
  TOGGLE_CONNECTION_VISIBILITY,
  SET_SIGN_IN_FIELD_VALUE,
  SET_SETTINGS_FIELD_VALUE,
  SIGN_IN,
  SIGN_OUT,
  SET_INFO_USER,
  SET_SELECTED_FILE,
  SET_SIGN_IN_CONTROL_MESSAGE,
  SET_PROGRESS_BY_THEME,
  VALIDATE_SETTINGS_EMAIL,
  TEST_SETTINGS_NEW_PASSWORD_STRENGTH,
  COMPARE_SETTINGS_PASSWORD_CONFIRM,
  VALIDATE_SIGN_IN_EMAIL,
  CHECK_SETTINGS_EMPTY_FIELD,
  SET_CONNECTION_VISIBILITY,
} from 'src/actions/auth';

const initialState = {
  email: {
    value: '',
    controlMessage: '',
  },
  password: {
    value: '',
    controlMessage: '',
  },
  selectedFile: null,
  newEmail: {
    value: '',
    controlMessage: '',
  },
  newPseudo: {
    value: '',
    controlMessage: '',
  },
  currentPassword: {
    value: '',
    controlMessage: '',
  },
  newPassword: {
    value: '',
    controlMessage: '',
  },
  newPasswordConfirm: {
    value: '',
    controlMessage: '',
  },
  isVisible: false,
  isLogged: false,
  user: {
    id: null,
    email: '',
    pseudo: '',
    role: '',
    picturePath: '',
    progressByTheme: [],
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CONNECTION_VISIBILITY:
      return {
        ...state,
        isVisible: action.visibility,
      };
    case SET_SIGN_IN_CONTROL_MESSAGE:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          controlMessage: action.message,
        },
      };
    case TOGGLE_CONNECTION_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case SET_SIGN_IN_FIELD_VALUE:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          value: action.value,
        },
      };
    case SET_SETTINGS_FIELD_VALUE:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          value: action.value,
        },
      };
    case SIGN_IN:
      return {
        ...state,
        isLogged: true,
        user: {
          ...state.user,
          id: action.id,
          email: action.email,
          pseudo: action.pseudo,
          role: action.role,
          picturePath: action.picturePath,
        },
      };
    case SIGN_OUT:
      return {
        ...initialState,
      };
    case SET_INFO_USER:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.newInfo,
        },
      };
    case SET_SELECTED_FILE:
      return {
        ...state,
        selectedFile: action.file,
      };
    case SET_PROGRESS_BY_THEME:
      return {
        ...state,
        user: {
          ...state.user,
          progressByTheme: action.progress,
        },
      };
    case VALIDATE_SETTINGS_EMAIL:
      return {
        ...state,
        newEmail: {
          ...state.newEmail,
          controlMessage: action.message,
        },
      };
    case VALIDATE_SIGN_IN_EMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          controlMessage: action.message,
        },
      };
    case TEST_SETTINGS_NEW_PASSWORD_STRENGTH:
      return {
        ...state,
        newPassword: {
          ...state.newPassword,
          controlMessage: action.message,
        },
      };
    case COMPARE_SETTINGS_PASSWORD_CONFIRM:
      return {
        ...state,
        newPasswordConfirm: {
          ...state.newPasswordConfirm,
          controlMessage: action.message,
        },
      };
    case CHECK_SETTINGS_EMPTY_FIELD:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          controlMessage: action.message,
        },
      };
    default:
      return state;
  }
};

export default reducer;
