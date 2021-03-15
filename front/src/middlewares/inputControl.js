import {
  SET_SIGN_IN_CONTROL_MESSAGE,
} from 'src/actions/auth';
import {
  SET_SIGN_UP_CONTROL_MESSAGE,
} from 'src/actions/signup';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case SET_SIGN_IN_CONTROL_MESSAGE:
    case SET_SIGN_UP_CONTROL_MESSAGE:
      if (!action.value) {
        action.message = 'Ce champ est obligatoire. Veuillez renseigner une valeur.';
      }
      else {
        action.message = '';
      }

      return next(action);
    default:
      return next(action);
  }
};
