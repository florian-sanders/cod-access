import {
  TRY_SIGN_UP,
  signUp,
  setSignUpLoading,
} from 'src/actions/signup';
import {
  setMessage,
} from 'src/actions/other';

import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case TRY_SIGN_UP:
      try {
        store.dispatch(setSignUpLoading(true));
        const {
          signup: {
            email, pseudo, password, passwordConfirm,
          },
        } = store.getState();
        const response = await axiosInstance.post('/signup', {
          email: email.value,
          pseudo: pseudo.value,
          password: password.value,
          passwordConfirm: passwordConfirm.value,
        });

        if (response.status !== 200) {
          throw new Error();
        }
        store.dispatch(signUp());
      }
      catch ({ response }) {
        if (response.data.message === 'email used') {
          store.dispatch(setMessage({
            type: 'error',
            message: `L'adresse e-mail est déjà utilisée`,
            componentToDisplayIn: 'SignUp',
          }));
        }
      }
      finally {
        store.dispatch(setSignUpLoading(false));
      }
      return next(action);
    default:
      return next(action);
  }
};
