import {
  SET_USERS_LIST_LOADER,
  SET_ALL_USERS,
  SET_USERS,
  SET_ALL_USERS_ROLE,
  SET_USER_ROLE,
  DELETE_USER,
} from 'src/actions/users';

const initialState = {
  users: [],
  usersRole: {},
  loadingUsersList: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ALL_USERS:
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
    case SET_USERS:
      return {
        ...state,
        users:
          state.users.map(
            (user) => (
              user.id === action.idUser
                ? {
                  ...user,
                  responsibility: {
                    ...user.responsibility,
                    entitled: action.role,
                  },
                }
                : user
            ),
          ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.idUser),
      };
    default:
      return state;
  }
};

export default reducer;
