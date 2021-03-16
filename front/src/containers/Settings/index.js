import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import {
  setSettingsFieldValue,
  editEmailUser,
  editPseudoUser,
  editPasswordUser,
  setSelectedFile,
  uploadFileProfile,
  deleteAccount,
  validateSettingsEmail,
  testSettingsNewPasswordStrength,
  compareSettingsPasswordConfirm,
} from 'src/actions/auth';

const mapStateToProps = (state) => ({
  newEmail: state.auth.newEmail,
  newPseudo: state.auth.newPseudo,
  currentPassword: state.auth.currentPassword,
  newPassword: state.auth.newPassword,
  newPasswordConfirm: state.auth.newPasswordConfirm,
  user: state.auth.user,
  selectedFile: state.auth.selectedFile,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setSettingsFieldValue(value, name)),
  onSubmitEmail: () => dispatch(editEmailUser()),
  onSubmitPseudo: () => dispatch(editPseudoUser()),
  onSubmitPassword: () => dispatch(editPasswordUser()),
  onSubmitFile: () => dispatch(uploadFileProfile()),
  setSelectedFile: (file) => dispatch(setSelectedFile(file)),
  deleteAccount: () => dispatch(deleteAccount()),
  validateEmail: ({ message, value }) => dispatch(validateSettingsEmail({ message, email: value })),
  testPasswordStrength: ({ message, value }) => dispatch(
    testSettingsNewPasswordStrength({ message, password: value }),
  ),
  comparePasswordConfirm: ({ message, value }) => dispatch(
    compareSettingsPasswordConfirm({ message, password: value }),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
