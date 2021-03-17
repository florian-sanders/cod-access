export const SET_SIGN_UP_FIELD_VALUE = 'SET_SIGN_UP_FIELD_VALUE';

export const setSignUpFieldValue = (value, name) => ({
  type: SET_SIGN_UP_FIELD_VALUE,
  value,
  name,
});

export const TRY_SIGN_UP = 'TRY_SIGN_UP';

export const trySignUp = () => ({
  type: TRY_SIGN_UP,
});

export const SET_SIGN_UP_LOADING = 'SET_SIGN_UP_LOADING';

export const setSignUpLoading = (loading) => ({
  type: SET_SIGN_UP_LOADING,
  loading,
});

export const SIGN_UP = 'SIGN_UP';

export const signUp = () => ({
  type: SIGN_UP,
});

export const SET_SIGN_UP_CONTROL_MESSAGE = 'SET_SIGN_UP_CONTROL_MESSAGE';

export const setSignUpControlMessage = ({ message, name, value }) => ({
  type: SET_SIGN_UP_CONTROL_MESSAGE,
  message,
  name,
  value,
});

export const VALIDATE_SIGN_UP_EMAIL = 'VALIDATE_SIGN_UP_EMAIL';

export const validateSignUpEmail = ({ message, email }) => ({
  type: VALIDATE_SIGN_UP_EMAIL,
  message,
  email,
});

export const TEST_SIGN_UP_PASSWORD_STRENGTH = 'TEST_SIGN_UP_PASSWORD_STRENGTH';

export const testSignUpPasswordStrength = ({ message, password }) => ({
  type: TEST_SIGN_UP_PASSWORD_STRENGTH,
  message,
  password,
});

export const COMPARE_SIGN_UP_PASSWORD_CONFIRM = 'COMPARE_SIGN_UP_PASSWORD_CONFIRM';

export const compareSignUpPasswordConfirm = (message) => ({
  type: COMPARE_SIGN_UP_PASSWORD_CONFIRM,
  message,
});
