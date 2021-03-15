import {
  TRY_SIGN_UP,
  signUp,
  setSignUpLoading,
} from 'src/actions/signup';
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
          email,
          pseudo,
          password,
          passwordConfirm,
        });
        if (response.status !== 200) {
          throw new Error();
        }
        store.dispatch(signUp());
      }
      catch (err) {
        console.log('error', err);
      }
      finally {
        store.dispatch(setSignUpLoading(false));
      }
      return next(action);
    default:
      return next(action);
  }
};
