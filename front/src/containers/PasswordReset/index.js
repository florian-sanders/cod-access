import { connect } from 'react-redux';
import PasswordReset from 'src/components/PasswordReset';
import {
  setPasswordResetFieldValue,
  setPasswordResetControlMessage,
  testPasswordResetStength,
  saveNewPassword,
  comparePasswordResetConfirm,
} from 'src/actions/auth';

const mapStateToProps = ({ auth, other }) => ({
  password: auth.passwordReset.password,
  passwordConfirm: auth.passwordReset.passwordConfirm,
  loading: auth.passwordReset.loading,
  messageParams: other.messageParams,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (fieldInfo) => dispatch(setPasswordResetFieldValue(fieldInfo)),
  saveNewPassword: (token) => dispatch(saveNewPassword(token)),
  setControlMessage: (messageInfo) => dispatch(setPasswordResetControlMessage(messageInfo)),
  validatePassword: ({ message, value }) => {
    dispatch(testPasswordResetStength({ message, password: value }));
  },
  comparePasswordResetConfirm: ({ message, value, valueToCompare }) => {
    dispatch(comparePasswordResetConfirm({
      message,
      password: valueToCompare,
      passwordConfirm: value,
    }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);
