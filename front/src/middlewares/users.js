import {
  FETCH_USERS,
  DELETE_USER,
  EDIT_USER_ROLE,
  setLoadingUsersList,
  setUsers,
} from 'src/actions/users';
import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_USERS:
      try {
        store.dispatch(setLoadingUsersList(true));
        const response = await axiosInstance.get('/clients');
        if (response.status !== 200) {
          throw new Error();
        }
        store.dispatch(setUsers(response.data));
      }
      catch (err) {
        console.log('error', err);
      }
      finally {
        store.dispatch(setLoadingUsersList(false));
      }
      return next(action);
    case DELETE_USER:
      try {
        const response = await axiosInstance.delete(`/clients/${action.idUser}`);
        if (response.status !== 200) {
          throw new Error();
        }
        const usersRole = {};
        response.data.map((user) => {
          usersRole[user.id] = user.role;
        });
        console.log(response.data);
      }
      catch (err) {
        console.log('error', err);
      }
      finally {
        //loader?
      }
      return next(action);
    case EDIT_USER_ROLE:
      try {
        const response = await axiosInstance.patch(`/clients/${action.idUser}`);
        if (response.status !== 200) {
          throw new Error();
        }
        console.log(response.data);
      }
      catch (err) {
        console.log('error', err);
      }
      finally {
      }
      return next(action);
    default:
      return next(action);
  }
};
