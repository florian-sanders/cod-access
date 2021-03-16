import { connect } from 'react-redux';
import AdminUsersList from 'src/components/AdminUsersList';
import {
  fetchUsers,
  deleteUser,
  editUserRole,
  setUserRole,
} from 'src/actions/users';

const mapStateToProps = (state) => ({
  users: state.users.users.rows,
  usersRole: state.users.usersRole,
  loadingUsersList: state.users.loadingUsersList,
  totalPages: Math.ceil(state.users.users.count / 10),
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: (page) => dispatch(fetchUsers(page)),
  deleteUser: (idUser) => dispatch(deleteUser(idUser)),
  editUserRole: (idUser) => dispatch(editUserRole(idUser)),
  handleChangeSelect: (id, role) => dispatch(setUserRole(id, role)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsersList);
