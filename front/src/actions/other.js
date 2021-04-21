export const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';

export const toggleMenuVisibility = () => ({
  type: TOGGLE_MENU_VISIBILITY,
});

export const FETCH_THEMES = 'FETCH_THEMES';

export const fetchThemes = () => ({
  type: FETCH_THEMES,
});

export const SET_THEMES = 'SET_THEMES';

export const setThemes = (themes) => ({
  type: SET_THEMES,
  themes,
});

export const SET_MODAL_CONFIRM = 'SET_MODAL_CONFIRM';

export const setModalConfirm = (modalConfirmParams) => ({
  type: SET_MODAL_CONFIRM,
  modalConfirmParams,
});

export const UNSET_MODAL_CONFIRM = 'UNSET_MODAL_CONFIRM';

export const unsetModalConfirm = () => ({
  type: UNSET_MODAL_CONFIRM,
});

export const SET_MESSAGE = 'SET_MESSAGE';

export const setMessage = (messageParams) => ({
  type: SET_MESSAGE,
  messageParams,
});

export const UNSET_MESSAGE = 'UNSET_MESSAGE';

export const unsetMessage = () => ({
  type: UNSET_MESSAGE,
});

export const SET_APP_LOADING = 'SET_APP_LOADING';

export const setAppLoading = (loading) => ({
  type: SET_APP_LOADING,
  loading,
});

export const SET_MOBILE_MENU_VISIBILITY = 'SET_MOBILE_MENU_VISIBILITY';

export const setMobileMenuVisibility = (visibility) => ({
  type: SET_MOBILE_MENU_VISIBILITY,
  visibility,
});

/* contact */
export const SET_CONTACT_FIELD_VALUE = 'SET_CONTACT_FIELD_VALUE';

export const setContactFieldValue = ({ value, name }) => ({
  type: SET_CONTACT_FIELD_VALUE,
  value,
  name,
});

export const TRY_SEND_CONTACT_MESSAGE = 'TRY_SEND_CONTACT_MESSAGE';

export const trySendContactMessage = () => ({
  type: TRY_SEND_CONTACT_MESSAGE,
});

export const SET_CONTACT_LOADING = 'SET_CONTACT_LOADING';

export const setContactLoading = (isLoading) => ({
  type: SET_CONTACT_LOADING,
  isLoading,
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

export const validateLength = ({ message, name }) => ({
  type: VALIDATE_LENGTH,
  message,
  name,
});

export const VALIDATE_CONTENT_LENGTH = 'VALIDATE_CONTENT_LENGTH';

export const validateContentLength = ({ message, content }) => ({
  type: VALIDATE_CONTENT_LENGTH,
  message,
  content,
});
