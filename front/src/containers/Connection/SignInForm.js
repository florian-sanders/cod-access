import { connect } from 'react-redux';
import SignInForm from 'src/components/Connection/SignInForm';

import {
  trySignIn,
  setSignInFieldValue,
  setSignInControlMessage,
  validateSignInEmail,
} from 'src/actions/auth';

const mapStateToProps = ({ other, auth }) => ({
  messageParams: other.messageParams,
  loading: auth.loading,
  email: auth.email,
  password: auth.password,
});

const mapDispatchToProps = (dispatch) => ({
  trySignIn: () => dispatch(trySignIn()),
  changeValue: ({ value, name }) => dispatch(setSignInFieldValue({ value, name })),
  checkEmptyField:
  (controlMessageInfo) => dispatch(setSignInControlMessage(controlMessageInfo)),
  validateInput: ({ message, value }) => dispatch(validateSignInEmail({ message, email: value })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
