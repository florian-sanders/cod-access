import { connect } from 'react-redux';
import PasswordResetRequest from 'src/components/PasswordResetRequest';
import {
  setPasswordResetFieldValue,
  sendPasswordResetRequest,
  setPasswordResetControlMessage,
  validatePasswordResetRequestEmail,
} from 'src/actions/auth';

const mapStateToProps = ({ auth, other }) => ({
  email: auth.passwordReset.email,
  loading: auth.passwordReset.loading,
  messageParams: other.messageParams,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (fieldInfo) => dispatch(setPasswordResetFieldValue(fieldInfo)),
  sendResetPasswordEmail: () => dispatch(sendPasswordResetRequest()),
  setControlMessage: (messageInfo) => dispatch(
    setPasswordResetControlMessage(messageInfo),
  ),
  validateEmail: ({ message, value }) => {
    dispatch(validatePasswordResetRequestEmail({ message, email: value }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordResetRequest);
