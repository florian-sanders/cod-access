import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import {
  setSettingsFieldValue,
  editEmailUser,
  editPseudoUser,
  editPasswordUser,
} from 'src/actions/auth';

const mapStateToProps = (state) => ({
  newEmail: state.auth.newEmail,
  newPseudo: state.auth.newPseudo,
  newPassword: state.auth.newPassword,
  newPasswordConfirm: state.auth.newPasswordConfirm,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setSettingsFieldValue(value, name)),
  onSubmitEmail: () => dispatch(editEmailUser()),
  onSubmitPseudo: () => dispatch(editPseudoUser()),
  onSubmitPassword: () => dispatch(editPasswordUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
