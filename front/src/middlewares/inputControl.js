import {
  SET_SIGN_IN_CONTROL_MESSAGE,
  VALIDATE_SETTINGS_EMAIL,
  TEST_SETTINGS_NEW_PASSWORD_STRENGTH,
  COMPARE_SETTINGS_PASSWORD_CONFIRM,
  VALIDATE_SIGN_IN_EMAIL,
  CHECK_SETTINGS_EMPTY_FIELD,
} from 'src/actions/auth';
import {
  SET_CONTACT_CONTROL_MESSAGE,
  VALIDATE_CONTACT_EMAIL,
  VALIDATE_LENGTH,
  VALIDATE_CONTENT_LENGTH,
  SET_FORGET_CONTROL_MESSAGE,
  VALIDATE_FORGET_EMAIL,
  SET_PASSWORD_CONTROL_MESSAGE,
  VALIDATE_PASSWORD,
  COMPARE_NEW_PASSWORD_CONFIRM,
} from 'src/actions/forget';
import {
  SET_SIGN_UP_CONTROL_MESSAGE,
  VALIDATE_SIGN_UP_EMAIL,
  TEST_SIGN_UP_PASSWORD_STRENGTH,
  COMPARE_SIGN_UP_PASSWORD_CONFIRM,
} from 'src/actions/signup';

export default (store) => (next) => async (action) => {
  const state = store.getState();
  switch (action.type) {
    case CHECK_SETTINGS_EMPTY_FIELD:
    case SET_SIGN_IN_CONTROL_MESSAGE:
    case SET_SIGN_UP_CONTROL_MESSAGE:
    case SET_CONTACT_CONTROL_MESSAGE:
    case SET_PASSWORD_CONTROL_MESSAGE:
    case SET_FORGET_CONTROL_MESSAGE:
      if (!action.value) {
        action.message = 'Ce champ est obligatoire. Veuillez renseigner une valeur.';
      }
      else {
        action.message = '';
      }

      return next(action);

    case VALIDATE_LENGTH:
      if (action.name.length < 2) {
        action.message = 'Ce champ doit contenir au moins 2 caractères.';
      }
      else {
        action.message = '';
      }

      return next(action);

    case VALIDATE_CONTENT_LENGTH:
      if (action.content.length < 20) {
        action.message = 'Ce champ doit contenir au moins 20 caractères.';
      }
      else {
        action.message = '';
      }

      return next(action);

    case VALIDATE_SIGN_IN_EMAIL:
    case VALIDATE_SETTINGS_EMAIL:
    case VALIDATE_SIGN_UP_EMAIL:
    case VALIDATE_CONTACT_EMAIL:
    case VALIDATE_FORGET_EMAIL:
      const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
      
      if (!emailRegex.test(action.email)) {
        action.message = 'Votre email ne semble pas valide';
      }
      else {
        action.message = '';
      }
      return next(action);

    case TEST_SETTINGS_NEW_PASSWORD_STRENGTH:
    case TEST_SIGN_UP_PASSWORD_STRENGTH:
    case VALIDATE_PASSWORD:
      if (action.password.length < 6) {
        action.message = 'Votre mot de passe doit contenir au moins 6 caractères';
      }
      else {
        action.message = '';
      }
      return next(action);
    case COMPARE_SIGN_UP_PASSWORD_CONFIRM:
      if (state.signup.password.value !== state.signup.passwordConfirm.value) {
        action.message = 'Vous avez saisi deux mots de passe différents';
      }
      else {
        action.message = '';
      }
      return next(action);

    case COMPARE_SETTINGS_PASSWORD_CONFIRM:
      if (state.auth.newPassword.value !== state.auth.newPasswordConfirm.value) {
        action.message = 'Vous avez saisi deux mots de passe différents';
      }
      else {
        action.message = '';
      }
      return next(action);

    case COMPARE_NEW_PASSWORD_CONFIRM:
      if (action.password !== action.passwordConfirm) {
        action.message = 'Vous avez saisi deux mots de passe différents';
      }
      else {
        action.message = '';
      }
      return next(action);
    default:
      return next(action);
  }
};
