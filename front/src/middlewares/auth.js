import {
  TRY_SIGN_IN,
  CHECK_IS_SIGNED_IN,
  signIn,
} from 'src/actions/auth';
import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case TRY_SIGN_IN:
      try {
        const { auth: { email, password } } = store.getState();

        const response = await axiosInstance.post('/signin', {
          email,
          password,
        });

        if (response.status !== 200) {
          throw new Error();
        }

        store.dispatch(signIn(response.data));
      }
      catch (err) {
        console.log('error', err);
      }
      finally {
        // loader later
      }
      return next(action);
    case CHECK_IS_SIGNED_IN:
      try {
        const response = await axiosInstance.get('/profile');

        if (response.status !== 200) {
          throw new Error();
        }

        store.dispatch(signIn(response.data));
      }
      catch (err) {
        console.log(err);
      }
      return next(action);
    default:
      return next(action);
  }
};
