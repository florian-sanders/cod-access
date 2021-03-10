export const ON_CHANGE_TEXT_EMAIL = 'ON_CHANGE_TEXT_EMAIL';
export const ON_CHANGE_TEXT_PASS = 'ON_CHANGE_TEXT_PASS';
export const SEND_MAIL_LINK_NEW_PASSWORD = 'SEND_MAIL_LINK_NEW_PASSWORD';
export const NEW_PASSWORD = 'NEW_PASSWORD';

export const setOnChangeText = (payload) => ({
  type: ON_CHANGE_TEXT_EMAIL,
  payload,
});

export const setOnChangePass = (payload, payload2) => ({
  type: ON_CHANGE_TEXT_PASS,
  payload,
  payload2,
});

export const setSendForEmail = () => ({
  type: SEND_MAIL_LINK_NEW_PASSWORD,
});

export const setValidNewPassword = (token) => ({
  type: NEW_PASSWORD,
  token,
});
