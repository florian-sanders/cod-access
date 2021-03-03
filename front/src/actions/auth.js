export const TOGGLE_CONNECTION_VISIBILITY = 'TOGGLE_CONNECTION_VISIBILITY';
export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';

export const toggleConnectionVisibility = () => ({
  type: TOGGLE_CONNECTION_VISIBILITY,
});

export const setFieldValue = (value, name) => ({
  type: SET_FIELD_VALUE,
  value,
  name,
});
