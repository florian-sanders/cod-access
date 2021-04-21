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
  SET_SIGN_IN_LOADING,
  SET_PASSWORD_RESET_CONTROL_MESSAGE,
  SET_PASSWORD_RESET_FIELD_VALUE,
  SET_PASSWORD_RESET_REQUEST_LOADING,
  VALIDATE_PASSWORD_RESET_REQUEST_EMAIL,
  COMPARE_PASSWORD_RESET_CONFIRM,
} from 'src/actions/auth';

const initialState = {
  signIn: {
    email: {
      value: '',
      controlMessage: '',
    },
    password: {
      value: '',
      controlMessage: '',
    },
    isVisible: false,
    loading: false,
  },
  settings: {
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
  },
  passwordReset: {
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
    loading: false,
  },
  user: {
    id: null,
    email: '',
    pseudo: '',
    role: '',
    picturePath: '',
    progressByTheme: [],
    isLogged: false,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SIGN_IN_LOADING:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          loading: action.isLoading,
        },
      };
    case SET_CONNECTION_VISIBILITY:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          isVisible: action.isVisible,
        },
      };
    case SET_SIGN_IN_CONTROL_MESSAGE:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          [action.name]: {
            ...state.signIn[action.name],
            controlMessage: action.message,
          },
        },
      };
    case TOGGLE_CONNECTION_VISIBILITY:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          isVisible: !state.isVisible,
        },
      };
    case SET_SIGN_IN_FIELD_VALUE:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          [action.name]: {
            ...state.signIn[action.name],
            value: action.value,
          },
        },
      };
    case VALIDATE_SIGN_IN_EMAIL:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          email: {
            ...state.signIn.email,
            controlMessage: action.message,
          },
        },
      };
    case SIGN_IN:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.id,
          email: action.email,
          pseudo: action.pseudo,
          role: action.role,
          picturePath: action.picturePath,
          isLogged: true,
        },
      };
    case SIGN_OUT:
      return {
        ...initialState,
      };
    case SET_SETTINGS_FIELD_VALUE:
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.name]: {
            ...state.settings[action.name],
            value: action.value,
          },
        },
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
        settings: {
          ...state.settings,
          selectedFile: action.file,
        },
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
        settings: {
          ...state.settings,
          newEmail: {
            ...state.newEmail,
            controlMessage: action.message,
          },
        },
      };
    case TEST_SETTINGS_NEW_PASSWORD_STRENGTH:
      return {
        ...state,
        settings: {
          ...state.settings,
          newPassword: {
            ...state.newPassword,
            controlMessage: action.message,
          },
        },
      };
    case COMPARE_SETTINGS_PASSWORD_CONFIRM:
      return {
        ...state,
        settings: {
          ...state.settings,
          newPasswordConfirm: {
            ...state.newPasswordConfirm,
            controlMessage: action.message,
          },
        },
      };
    case CHECK_SETTINGS_EMPTY_FIELD:
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.name]: {
            ...state.settings[action.name],
            controlMessage: action.message,
          },
        },
      };
    case SET_PASSWORD_RESET_CONTROL_MESSAGE:
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          [action.name]: {
            ...state.passwordReset[action.name],
            controlMessage: action.message,
          },
        },
      };
    case VALIDATE_PASSWORD_RESET_REQUEST_EMAIL:
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          email: {
            ...state.passwordReset.email,
            controlMessage: action.message,
          },
        },
      };
    case SET_PASSWORD_RESET_FIELD_VALUE:
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          [action.name]: {
            ...state.passwordReset[action.name],
            value: action.value,
          },
        },
      };
    case SET_PASSWORD_RESET_REQUEST_LOADING:
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          loading: action.isLoading,
        },
      };
    case COMPARE_PASSWORD_RESET_CONFIRM:
      return {
        ...state,
        passwordReset: {
          ...state.passwordReset,
          passwordConfirm: {
            ...state.passwordReset.passwordConfirm,
            controlMessage: action.message,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
