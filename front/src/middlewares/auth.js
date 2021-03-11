import {
  TRY_SIGN_IN,
  CHECK_IS_SIGNED_IN,
  SIGN_OUT,
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
        // upon loading the app, retrieve the csrf token from the server
        const {
          data: dataCSRF,
          status: statusCSRF,
        } = await axiosInstance.get('/csrf-token');

        if (statusCSRF !== 200) {
          throw new Error('CSRF error');
        }

        // server will check if our csrf cookie token value matches our header token value,
        // meaning the request comes from the app and not another site
        axiosInstance.defaults.headers.post['X-CSRF-Token'] = dataCSRF.csrfToken;
        axiosInstance.defaults.headers.patch['X-CSRF-Token'] = dataCSRF.csrfToken;
        axiosInstance.defaults.headers.delete['X-CSRF-Token'] = dataCSRF.csrfToken;

        // once csrf token is set (both in cookie and headers), try to access the profile route
        // if our client has an HTTPOnly cookie with a valid JWT, server will respond 200
        // if response is 200, then sign in the user with profile info received. If not, do nothing.
        const {
          data: dataProfile,
          status: statusProfile,
        } = await axiosInstance.get('/profile');

        if (statusProfile !== 200) {
          throw new Error();
        }

        store.dispatch(signIn(dataProfile));
      }
      catch (err) {
        console.log(err);
      }
      return next(action);
    case SIGN_OUT:
      try {
        // calls the route to sign out which removes the HTTPOnly cookie with auth JWT
        const { status } = await axiosInstance.get('/signout');

        if (status !== 200) {
          throw new Error();
        }
      }
      catch (err) {
        console.log(err);
      }
      return next(action);
    default:
      return next(action);
  }
};
