import {
  SET_USERS_LIST_LOADER,
  SET_USERS,
} from 'src/actions/users';

const initialState = {
  users: [],
  loadingUsersList: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_USERS_LIST_LOADER:
      return {
        ...state,
        loadingUsersList: action.loading,
      };
    default:
      return state;
  }
};

export default reducer;
