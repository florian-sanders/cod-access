export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';

export const setFieldValue = (value, name) => ({
  type: SET_FIELD_VALUE,
  value,
  name,
});
