import { connect } from 'react-redux';
import AdminUsersList from 'src/components/AdminUsersList';
import {
  fetchUsers,
  deleteUser,
  editUserRole,
  setUserRole,
} from 'src/actions/users';

const mapStateToProps = (state) => ({
  users: state.users.users,
  usersRole: state.users.usersRole,
  loadingUsersList: state.users.loadingUsersList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  deleteUser: (idUser) => dispatch(deleteUser(idUser)),
  editUserRole: (idUser) => dispatch(editUserRole(idUser)),
  handleChangeSelect: (id, role) => dispatch(setUserRole(id, role)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsersList);
