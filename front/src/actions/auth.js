/* login / logout actions */
export const SET_SIGN_IN_LOADING = 'SET_SIGN_IN_LOADING';

export const setSignInLoading = (isLoading) => ({
  type: SET_SIGN_IN_LOADING,
  isLoading,
});

export const TOGGLE_CONNECTION_VISIBILITY = 'TOGGLE_CONNECTION_VISIBILITY';

export const toggleConnectionVisibility = () => ({
  type: TOGGLE_CONNECTION_VISIBILITY,
});

export const SET_CONNECTION_VISIBILITY = 'SET_CONNECTION_VISIBILITY';

export const setConnectionVisibility = (isVisible) => ({
  type: SET_CONNECTION_VISIBILITY,
  isVisible,
});

export const SET_SIGN_IN_FIELD_VALUE = 'SET_SIGN_IN_FIELD_VALUE';

export const setSignInFieldValue = ({ value, name }) => ({
  type: SET_SIGN_IN_FIELD_VALUE,
  value,
  name,
});

export const TRY_SIGN_IN = 'TRY_SIGN_IN';

export const trySignIn = () => ({
  type: TRY_SIGN_IN,
});

export const SIGN_IN = 'SIGN_IN';

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

export const SIGN_OUT = 'SIGN_OUT';

export const signOut = () => ({
  type: SIGN_OUT,
});

export const CHECK_IS_SIGNED_IN = 'CHECK_IS_SIGNED_IN';

export const checkIsSignedIn = () => ({
  type: CHECK_IS_SIGNED_IN,
});

export const GET_CSRF_TOKEN = 'GET_CSRF_TOKEN';

export const getCSRFToken = () => ({
  type: GET_CSRF_TOKEN,
});

/* Settings actions */
export const SET_SETTINGS_FIELD_VALUE = 'SET_SETTINGS_FIELD_VALUE';

export const setSettingsFieldValue = (value, name) => ({
  type: SET_SETTINGS_FIELD_VALUE,
  value,
  name,
});

export const EDIT_EMAIL_USER = 'EDIT_EMAIL_USER';

export const editEmailUser = () => ({
  type: EDIT_EMAIL_USER,
});

export const EDIT_PSEUDO_USER = 'EDIT_PSEUDO_USER';

export const editPseudoUser = () => ({
  type: EDIT_PSEUDO_USER,
});

export const EDIT_PASSWORD_USER = 'EDIT_PASSWORD_USER';

export const editPasswordUser = () => ({
  type: EDIT_PASSWORD_USER,
});

export const SET_INFO_USER = 'SET_INFO_USER';

export const setInfoUser = (name, newInfo) => ({
  type: SET_INFO_USER,
  name,
  newInfo,
});

export const SET_SELECTED_FILE = 'SET_SELECTED_FILE';

export const setSelectedFile = (file) => ({
  type: SET_SELECTED_FILE,
  file,
});

export const UPLOAD_FILE_PROFILE = 'UPLOAD_FILE_PROFILE';

export const uploadFileProfile = () => ({
  type: UPLOAD_FILE_PROFILE,
});

export const CLEAN_SELECTED_FILE = 'CLEAN_SELECTED_FILE';

export const cleanSelectedFile = () => ({
  type: CLEAN_SELECTED_FILE,
});

export const SET_SIGN_IN_CONTROL_MESSAGE = 'SET_SIGN_IN_CONTROL_MESSAGE';

export const setSignInControlMessage = ({ message, name, value }) => ({
  type: SET_SIGN_IN_CONTROL_MESSAGE,
  message,
  name,
  value,
});

export const FETCH_PROGRESS_BY_THEME = 'FETCH_PROGRESS_BY_THEME';

export const fetchProgressByTheme = () => ({
  type: FETCH_PROGRESS_BY_THEME,
});

export const SET_PROGRESS_BY_THEME = 'SET_PROGRESS_BY_THEME';

export const setProgressByTheme = (progress) => ({
  type: SET_PROGRESS_BY_THEME,
  progress,
});

export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT,
});

export const VALIDATE_SETTINGS_EMAIL = 'VALIDATE_SETTINGS_EMAIL';

export const validateSettingsEmail = ({ message, email }) => ({
  type: VALIDATE_SETTINGS_EMAIL,
  message,
  email,
});

export const VALIDATE_SIGN_IN_EMAIL = 'VALIDATE_SIGN_IN_EMAIL';

export const validateSignInEmail = ({ message, email }) => ({
  type: VALIDATE_SIGN_IN_EMAIL,
  message,
  email,
});


export const TEST_SETTINGS_NEW_PASSWORD_STRENGTH = 'TEST_SETTINGS_NEW_PASSWORD_STRENGTH';

export const testSettingsNewPasswordStrength = ({ message, password }) => ({
  type: TEST_SETTINGS_NEW_PASSWORD_STRENGTH,
  message,
  password,
});

export const COMPARE_SETTINGS_PASSWORD_CONFIRM = 'COMPARE_SETTINGS_PASSWORD_CONFIRM';

export const compareSettingsPasswordConfirm = ({ passwordConfirm, message }) => ({
  type: COMPARE_SETTINGS_PASSWORD_CONFIRM,
  passwordConfirm,
  message,
});

export const CHECK_SETTINGS_EMPTY_FIELD = 'CHECK_SETTINGS_EMPTY_FIELD';

export const checkSettingsEmptyField = ({ message, name, value }) => ({
  type: CHECK_SETTINGS_EMPTY_FIELD,
  message,
  name,
  value,
});

/* password reset actions */
export const SET_PASSWORD_RESET_REQUEST_LOADING = 'SET_PASSWORD_RESET_REQUEST_LOADING';

export const setPasswordResetRequestLoading = (isLoading) => ({
  type: SET_PASSWORD_RESET_REQUEST_LOADING,
  isLoading,
});

export const SET_PASSWORD_RESET_FIELD_VALUE = 'SET_PASSWORD_RESET_FIELD_VALUE';

export const setPasswordResetFieldValue = ({ value, name }) => ({
  type: SET_PASSWORD_RESET_FIELD_VALUE,
  value,
  name,
});

export const SEND_PASSWORD_RESET_REQUEST = 'SEND_PASSWORD_RESET_REQUEST';

export const sendPasswordResetRequest = () => ({
  type: SEND_PASSWORD_RESET_REQUEST,
});

export const VALIDATE_PASSWORD_RESET_REQUEST_EMAIL = 'VALIDATE_PASSWORD_RESET_REQUEST_EMAIL';

export const validatePasswordResetRequestEmail = ({ message, email }) => ({
  type: VALIDATE_PASSWORD_RESET_REQUEST_EMAIL,
  message,
  email,
});

export const SAVE_NEW_PASSWORD = 'SAVE_NEW_PASSWORD';

export const saveNewPassword = (newToken) => ({
  type: SAVE_NEW_PASSWORD,
  newToken,
});

export const SET_PASSWORD_RESET_CONTROL_MESSAGE = 'SET_PASSWORD_RESET_CONTROL_MESSAGE';

export const setPasswordResetControlMessage = ({
  message, name, value,
}) => ({
  type: SET_PASSWORD_RESET_CONTROL_MESSAGE,
  message,
  name,
  value,
});

export const TEST_PASSWORD_RESET_STRENGTH = 'TEST_PASSWORD_RESET_STRENGTH';

export const testPasswordResetStength = ({ message, password }) => ({
  type: TEST_PASSWORD_RESET_STRENGTH,
  message,
  password,
});

export const COMPARE_PASSWORD_RESET_CONFIRM = 'COMPARE_PASSWORD_RESET_CONFIRM';

export const comparePasswordResetConfirm = ({ message, password, passwordConfirm }) => ({
  type: COMPARE_PASSWORD_RESET_CONFIRM,
  message,
  password,
  passwordConfirm,
});
