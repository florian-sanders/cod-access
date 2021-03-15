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
