export const TOGGLE_CONNECTION_VISIBILITY = 'TOGGLE_CONNECTION_VISIBILITY';
export const SET_SIGN_IN_FIELD_VALUE = 'SET_SIGN_IN_FIELD_VALUE';
export const TRY_SIGN_IN = 'TRY_SIGN_IN';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const CHECK_IS_SIGNED_IN = 'CHECK_IS_SIGNED_IN';

export const toggleConnectionVisibility = () => ({
  type: TOGGLE_CONNECTION_VISIBILITY,
});

export const setSignInFieldValue = (value, name) => ({
  type: SET_SIGN_IN_FIELD_VALUE,
  value,
  name,
});

export const trySignIn = () => ({
  type: TRY_SIGN_IN,
});

export const signIn = ({
  email,
  pseudo,
  responsibility: { entitled: role },
}) => ({
  type: SIGN_IN,
  email,
  pseudo,
  role,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const checkIsSignedIn = () => ({
  type: CHECK_IS_SIGNED_IN,
});
