import {
  TRY_SIGN_IN,
  CHECK_IS_SIGNED_IN,
  SIGN_OUT,
  EDIT_PSEUDO_USER,
  EDIT_EMAIL_USER,
  UPLOAD_FILE_PROFILE,
  signIn,
  setInfoUser,
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
    case EDIT_PSEUDO_USER:
      try {
        const { auth: { newPseudo } } = store.getState();
        const response = await axiosInstance.patch('/profile', {
          pseudo: newPseudo,
        });
        if (response.status !== 200) {
          throw new Error();
        }
        store.dispatch(setInfoUser('pseudo', response.data.pseudo));
      }
      catch (err) {
        console.log(err);
      }
      return next(action);
    case EDIT_EMAIL_USER:
      try {
        const { auth: { newEmail } } = store.getState();
        const response = await axiosInstance.patch('/profile', {
          email: newEmail,
        });
        if (response.status !== 200) {
          throw new Error();
        }
        store.dispatch(setInfoUser('email', response.data.email));
      }
      catch (err) {
        console.log(err);
      }
      return next(action);
    case UPLOAD_FILE_PROFILE:
      try {
        const { auth: { selectedFile } } = store.getState();
        const data = new FormData();
        data.append('profile', selectedFile);
        const response = await axiosInstance.post('/upload', data, {});
        if (response.status !== 200) {
          throw new Error();
        }
        console.log('response', response.data.path);
        // store.dispatch(setInfoUser('pseudo', response.data.pseudo));
        console.log('middleware', selectedFile);
      }
      catch (err) {
        console.log(err);
      }
      return next(action);
    default:
      return next(action);
  }
};
