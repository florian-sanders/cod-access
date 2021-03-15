import {
  TRY_SIGN_IN,
  CHECK_IS_SIGNED_IN,
  SIGN_OUT,
  EDIT_PSEUDO_USER,
  EDIT_PASSWORD_USER,
  EDIT_EMAIL_USER,
  UPLOAD_FILE_PROFILE,
  GET_CSRF_TOKEN,
  FETCH_PROGRESS_BY_THEME,
  signIn,
  signOut,
  setInfoUser,
  setSelectedFile,
  setProgressByTheme,
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

        localStorage.setItem('isSignedIn', true);
        store.dispatch(signIn(response.data));
      }
      catch (err) {
        console.log('error', err);
      }
      finally {
        // loader later
      }
      return next(action);
    case GET_CSRF_TOKEN:
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
      }
      catch (err) {
        console.log(err);
      }
      return next(action);
    case CHECK_IS_SIGNED_IN:
      try {
        // try to access the profile route
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
        store.dispatch(signOut());
      }
      return next(action);
    case SIGN_OUT:
      try {
        // calls the route to sign out which removes the HTTPOnly cookie with auth JWT
        const { status } = await axiosInstance.get('/signout');

        if (status !== 200) {
          throw new Error();
        }

        localStorage.removeItem('isSignedIn');
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
    case EDIT_PASSWORD_USER:
      try {
        const { auth: { currentPassword, newPassword, newPasswordConfirm } } = store.getState();
        const response = await axiosInstance.patch('/profile', {
          password: currentPassword,
          newPassword,
          newPasswordConfirm,
        });
        if (response.status !== 200) {
          throw new Error();
        }
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
        const {
          data: {
            myFile: {
              path: pathPicture,
            },
          },
          status,
        } = await axiosInstance.post('/upload_client', data, {});
        if (status !== 200) {
          throw new Error();
        }
        store.dispatch(setInfoUser('picturePath', pathPicture.substring(6)));
        store.dispatch(setSelectedFile(null));
      }
      catch (err) {
        console.log(err);
      }
      return next(action);
    case FETCH_PROGRESS_BY_THEME:
      try {
        const response = await axiosInstance.get('/themes_score');
        if (response.status !== 200) {
          throw new Error();
        }
        store.dispatch(setProgressByTheme(response.data));
      }
      catch (err) {
        console.log(err);
      }
      return next(action);
    default:
      return next(action);
  }
};
