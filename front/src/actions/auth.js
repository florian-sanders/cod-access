export const TOGGLE_CONNECTION_VISIBILITY = 'TOGGLE_CONNECTION_VISIBILITY';
export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
export const TRY_SIGN_IN = 'TRY_SIGN_IN';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const toggleConnectionVisibility = () => ({
  type: TOGGLE_CONNECTION_VISIBILITY,
});

export const setFieldValue = (value, name) => ({
  type: SET_FIELD_VALUE,
  value,
  name,
});

export const trySignIn = () => ({
  type: TRY_SIGN_IN,
});

export const signIn = ({ pseudo, token }) => ({
  type: SIGN_IN,
  pseudo,
  token,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
