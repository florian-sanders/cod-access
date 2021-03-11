import { connect } from 'react-redux';
import AdminUsersList from 'src/components/AdminUsersList';
import {
  fetchUsers,
  deleteUser,
  editUserRole,
} from 'src/actions/users';

const mapStateToProps = (state) => ({
  users: state.users.users,
  loadingUsersList: state.users.loadingUsersList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  deleteUser: (idUser) => dispatch(deleteUser(idUser)),
  editUserRole: (idUser) => dispatch(editUserRole(idUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsersList);
