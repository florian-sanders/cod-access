import {
  SET_USERS_LIST_LOADER,
  SET_USERS,
  SET_ALL_USERS_ROLE,
  SET_USER_ROLE,
} from 'src/actions/users';

const initialState = {
  users: [],
  usersRole: {},
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
    case SET_ALL_USERS_ROLE:
      return {
        ...state,
        usersRole: action.usersRole,
      };
    case SET_USER_ROLE:
      return {
        ...state,
        usersRole: {
          ...state.usersRole,
          [action.id]: action.role,
        },
      };
    default:
      return state;
  }
};

export default reducer;
