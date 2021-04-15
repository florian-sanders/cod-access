export const ON_CHANGE_TEXT_EMAIL = 'ON_CHANGE_TEXT_EMAIL';

export const setOnChangeText = (payload) => ({
  type: ON_CHANGE_TEXT_EMAIL,
  payload,
});

export const ON_CHANGE_TEXT_PASS = 'ON_CHANGE_TEXT_PASS';

export const setOnChangePass = (payload, payload2) => ({
  type: ON_CHANGE_TEXT_PASS,
  payload,
  payload2,
});

export const SEND_MAIL_LINK_NEW_PASSWORD = 'SEND_MAIL_LINK_NEW_PASSWORD';

export const setSendForEmail = () => ({
  type: SEND_MAIL_LINK_NEW_PASSWORD,
});

export const NEW_PASSWORD = 'NEW_PASSWORD';

export const setValidNewPassword = (newToken) => ({
  type: NEW_PASSWORD,
  newToken,
});

export const SET_CONTACT_FIELD_VALUE = 'SET_CONTACT_FIELD_VALUE';

export const setContactFieldValue = (value, name) => ({
  type: SET_CONTACT_FIELD_VALUE,
  value,
  name,
});

export const TRY_CONTACT = 'TRY_CONTACT';

export const tryContact = () => ({
  type: TRY_CONTACT,
});

export const SET_CONTACT_LOADING = 'SET_CONTACT_LOADING';

export const setContactLoading = (loading) => ({
  type: SET_CONTACT_LOADING,
  loading,
});

export const CONTACT = 'CONTACT';

export const contact = () => ({
  type: CONTACT,
});

export const FORGET = 'FORGET';

export const forget = () => ({
  type: FORGET,
});

export const NEWPASS = 'NEWPASS';

export const newPass = () => ({
  type: NEWPASS,
});

export const SET_CONTACT_CONTROL_MESSAGE = 'SET_CONTACT_CONTROL_MESSAGE';

export const setContactControlMessage = ({ message, name, value }) => ({
  type: SET_CONTACT_CONTROL_MESSAGE,
  message,
  name,
  value,
});

export const VALIDATE_CONTACT_EMAIL = 'VALIDATE_CONTACT_EMAIL';

export const validateContactEmail = ({ message, emailContact }) => ({
  type: VALIDATE_CONTACT_EMAIL,
  message,
  email: emailContact,
});

export const VALIDATE_LENGTH = 'VALIDATE_LENGTH';

export const validateLenght = ({ message, name }) => ({
  type: VALIDATE_LENGTH,
  message,
  name,
});

export const VALIDATE_CONTENT_LENGTH = 'VALIDATE_CONTENT_LENGTH';

export const validateContentLenght = ({ message, content }) => ({
  type: VALIDATE_CONTENT_LENGTH,
  message,
  content,
});

export const SET_FORGET_CONTROL_MESSAGE = 'SET_FORGET_CONTROL_MESSAGE';

export const setForgetControlMessage = ({ message, name, value }) => ({
  type: SET_FORGET_CONTROL_MESSAGE,
  message,
  name,
  value,
});

export const VALIDATE_FORGET_EMAIL = 'VALIDATE_FORGET_EMAIL';

export const validateForgetEmail = ({ message, email }) => ({
  type: VALIDATE_FORGET_EMAIL,
  message,
  email,
});

export const SET_PASSWORD_CONTROL_MESSAGE = 'SET_PASSWORD_CONTROL_MESSAGE';

export const setPasswordControlMessage = ({
  message, name, value,
}) => ({
  type: SET_PASSWORD_CONTROL_MESSAGE,
  message,
  name,
  value,
});

export const VALIDATE_PASSWORD = 'VALIDATE_PASSWORD';

export const validatePassword = ({ message, password }) => ({
  type: VALIDATE_PASSWORD,
  message,
  password,
});

export const COMPARE_NEW_PASSWORD_CONFIRM = 'COMPARE_NEW_PASSWORD_CONFIRM';

export const compareNewPasswordConfirm = ({ message, password, passwordConfirm }) => ({
  type: COMPARE_NEW_PASSWORD_CONFIRM,
  message,
  password,
  passwordConfirm,
});
