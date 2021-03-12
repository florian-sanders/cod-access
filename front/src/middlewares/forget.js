import {
  SEND_MAIL_LINK_NEW_PASSWORD,
  NEW_PASSWORD,
} from 'src/actions/forget';
import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case SEND_MAIL_LINK_NEW_PASSWORD:
      try {
        const {
          forget: { email },
        } = store.getState();

        const response = await axiosInstance.post('/forget', {
          email,
        });
        if (response.status !== 200) {
          throw new Error();
        }
        console.log('ok');
      }
      catch (err) {
        console.log('error', err);
      }
      return next(action);

    case NEW_PASSWORD:
      try {
        const {
          forget: { password, passwordConfirm },
        } = store.getState();

        const response = await axiosInstance.patch('/forget',
          {
            headers: { Authorization: `Bearer ${action.token}` },
            password,
            passwordConfirm,
          });
        if (response.status !== 200) {
          throw new Error();
        }
        console.log('ok');
      }
      catch (err) {
        console.log('error', err);
      }
      return next(action);

    default:
      return next(action);
  }
};
