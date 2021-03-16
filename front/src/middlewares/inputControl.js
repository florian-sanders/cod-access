import {
  SET_SIGN_IN_CONTROL_MESSAGE,
} from 'src/actions/auth';
import {
  SET_CONTACT_CONTROL_MESSAGE,
  VALIDATE_CONTACT_EMAIL,
  VALIDATE_LENGTH,
  VALIDATE_CONTENT_LENGTH,
} from 'src/actions/forget';
import {
  SET_SIGN_UP_CONTROL_MESSAGE,
  VALIDATE_SIGN_UP_EMAIL,
} from 'src/actions/signup';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case SET_SIGN_IN_CONTROL_MESSAGE:
    case SET_SIGN_UP_CONTROL_MESSAGE:
    case SET_CONTACT_CONTROL_MESSAGE:
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

    case VALIDATE_SIGN_UP_EMAIL:
    case VALIDATE_CONTACT_EMAIL:
      const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

      if (!emailRegex.test(action.email)) {
        action.message = 'Votre email ne semble pas valide';
      }
      else {
        action.message = '';
      }
      return next(action);
    default:
      return next(action);
  }
};
