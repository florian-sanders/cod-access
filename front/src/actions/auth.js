export const TOGGLE_CONNECTION_VISIBILITY = 'TOGGLE_CONNECTION_VISIBILITY';
export const SET_SIGN_IN_FIELD_VALUE = 'SET_SIGN_IN_FIELD_VALUE';
export const SET_SETTINGS_FIELD_VALUE = 'SET_SETTINGS_FIELD_VALUE';
export const TRY_SIGN_IN = 'TRY_SIGN_IN';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const CHECK_IS_SIGNED_IN = 'CHECK_IS_SIGNED_IN';
export const EDIT_EMAIL_USER = 'EDIT_EMAIL_USER';
export const EDIT_PSEUDO_USER = 'EDIT_PSEUDO_USER';
export const EDIT_PASSWORD_USER = 'EDIT_PASSWORD_USER';
export const SET_INFO_USER = 'SET_INFO_USER';
export const SET_SELECTED_FILE = 'SET_SELECTED_FILE';
export const GET_CSRF_TOKEN = 'GET_CSRF_TOKEN';
export const UPLOAD_FILE_PROFILE = 'UPLOAD_FILE_PROFILE';
export const CLEAN_SELECTED_FILE = 'CLEAN_SELECTED_FILE';
export const SET_SIGN_IN_CONTROL_MESSAGE = 'SET_SIGN_IN_CONTROL_MESSAGE';
export const FETCH_PROGRESS_BY_THEME = 'FETCH_PROGRESS_BY_THEME';
export const SET_PROGRESS_BY_THEME = 'SET_PROGRESS_BY_THEME';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const VALIDATE_SETTINGS_EMAIL = 'VALIDATE_SETTINGS_EMAIL';
export const VALIDATE_SIGN_IN_EMAIL = 'VALIDATE_SIGN_IN_EMAIL';
export const TEST_SETTINGS_NEW_PASSWORD_STRENGTH = 'TEST_SETTINGS_NEW_PASSWORD_STRENGTH';
export const COMPARE_SETTINGS_PASSWORD_CONFIRM = 'COMPARE_SETTINGS_PASSWORD_CONFIRM';
export const CHECK_SETTINGS_EMPTY_FIELD = 'CHECK_SETTINGS_EMPTY_FIELD';

export const toggleConnectionVisibility = () => ({
  type: TOGGLE_CONNECTION_VISIBILITY,
});

export const setSignInFieldValue = ({ value, name }) => ({
  type: SET_SIGN_IN_FIELD_VALUE,
  value,
  name,
});

export const setSettingsFieldValue = (value, name) => ({
  type: SET_SETTINGS_FIELD_VALUE,
  value,
  name,
});

export const trySignIn = () => ({
  type: TRY_SIGN_IN,
});

export const signIn = ({
  id,
  email,
  pseudo,
  client_picture: { path: picturePath },
  responsibility: { entitled: role },
}) => ({
  type: SIGN_IN,
  id,
  email,
  pseudo,
  picturePath,
  role,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const checkIsSignedIn = () => ({
  type: CHECK_IS_SIGNED_IN,
});

export const getCSRFToken = () => ({
  type: GET_CSRF_TOKEN,
});

export const editEmailUser = () => ({
  type: EDIT_EMAIL_USER,
});

export const editPseudoUser = () => ({
  type: EDIT_PSEUDO_USER,
});

export const editPasswordUser = () => ({
  type: EDIT_PASSWORD_USER,
});

export const setInfoUser = (name, newInfo) => ({
  type: SET_INFO_USER,
  name,
  newInfo,
});

export const setSelectedFile = (file) => ({
  type: SET_SELECTED_FILE,
  file,
});

export const uploadFileProfile = () => ({
  type: UPLOAD_FILE_PROFILE,
});

export const cleanSelectedFile = () => ({
  type: CLEAN_SELECTED_FILE,
});

export const setSignInControlMessage = ({ message, name, value }) => ({
  type: SET_SIGN_IN_CONTROL_MESSAGE,
  message,
  name,
  value,
});

export const fetchProgressByTheme = () => ({
  type: FETCH_PROGRESS_BY_THEME,
});

export const setProgressByTheme = (progress) => ({
  type: SET_PROGRESS_BY_THEME,
  progress,
});

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT,
});

export const validateSettingsEmail = ({ message, email }) => ({
  type: VALIDATE_SETTINGS_EMAIL,
  message,
  email,
});

export const validateSignInEmail = ({ message, email }) => ({
  type: VALIDATE_SIGN_IN_EMAIL,
  message,
  email,
});

export const testSettingsNewPasswordStrength = ({ message, password }) => ({
  type: TEST_SETTINGS_NEW_PASSWORD_STRENGTH,
  message,
  password,
});

export const compareSettingsPasswordConfirm = (password, passwordConfirm) => ({
  type: COMPARE_SETTINGS_PASSWORD_CONFIRM,
  password,
  passwordConfirm,
});

export const checkSettingsEmptyField = ({ message, name, value }) => ({
  type: CHECK_SETTINGS_EMPTY_FIELD,
  message,
  name,
  value,
});
