import { connect } from 'react-redux';
import AdminUsersList from 'src/components/AdminUsersList';
import {
  fetchUsers,
  deleteUser,
  editUserRole,
  setUserRole,
} from 'src/actions/users';
import {
  setModalConfirm,
  setMessage,
} from 'src/actions/other';

const mapStateToProps = (state) => ({
  users: state.users.users.rows,
  usersRole: state.users.usersRole,
  loadingUsersList: state.users.loadingUsersList,
  totalPages: Math.ceil(state.users.users.count / 10),
  messageParams: state.other.messageParams,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: (page) => dispatch(fetchUsers(page)),
  deleteUser: ({ userId }) => dispatch(deleteUser(userId)),
  editUserRole: (idUser) => dispatch(editUserRole(idUser)),
  handleChangeSelect: (id, role) => dispatch(setUserRole(id, role)),
  displayModalConfirm: (modalConfirmParams) => dispatch(setModalConfirm(modalConfirmParams)),
  displayMessage: (messageParams) => dispatch(setMessage(messageParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsersList);
