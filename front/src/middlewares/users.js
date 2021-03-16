import {
  FETCH_USERS,
  DELETE_USER,
  EDIT_USER_ROLE,
  setLoadingUsersList,
  setAllUsers,
  setAllUsersRole,
  setUsers,
} from 'src/actions/users';
import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_USERS:
      try {
        store.dispatch(setLoadingUsersList(true));
        const response = await axiosInstance.get(`/clients?limit=10&page=${action.page}`);
        if (response.status !== 200) {
          throw new Error();
        }
        const usersRole = {};
        response.data.rows.forEach((user) => {
          usersRole[user.id] = user.responsibility.entitled;
        });
        store.dispatch(setAllUsers(response.data));
        store.dispatch(setAllUsersRole(usersRole));
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
        const { users: { usersRole } } = store.getState();
        const responsibility = usersRole[action.idUser];
        const response = await axiosInstance.patch(`/clients/${action.idUser}`, { responsibility });
        if (response.status !== 200) {
          throw new Error();
        }
        store.dispatch(setUsers(action.idUser, responsibility));
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
