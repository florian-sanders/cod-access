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
  email,
  pseudo,
  client_picture: { path: picturePath },
  responsibility: { entitled: role },
}) => ({
  type: SIGN_IN,
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
