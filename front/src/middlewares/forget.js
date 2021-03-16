import {
  SEND_MAIL_LINK_NEW_PASSWORD,
  NEW_PASSWORD,
  TRY_CONTACT,
  contact,
  setContactLoading,
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
        console.log('action.newToken', action.newToken);
        const {
          forget: { password, passwordConfirm },
        } = store.getState();

        const response = await axiosInstance.patch('/forget',
          {
            password,
            passwordConfirm,
          }, {
            headers: { Authorization: `Bearer ${action.newToken}` },
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

      case TRY_CONTACT:
        try {
          store.dispatch(setContactLoading(true));
          const {
            forget: {
              name, emailContact, content,
            },
          } = store.getState();
          const response = await axiosInstance.post('/contact', {
            name: name.value,
            email: emailContact.value,
            content: content.value,
          });
          if (response.status !== 200) {
            throw new Error();
          }
          store.dispatch(contact());
        }
        catch (err) {
          console.log('error', err);
        }
        finally {
          store.dispatch(setContactLoading(false));
        }
        return next(action);

    default:
      return next(action);
  }
};
