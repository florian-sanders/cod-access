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
  loading: auth.signIn.loading,
  email: auth.signIn.email,
  password: auth.signIn.password,
});

const mapDispatchToProps = (dispatch) => ({
  trySignIn: () => dispatch(trySignIn()),
  changeValue: (fieldInfo) => dispatch(setSignInFieldValue(fieldInfo)),
  checkEmptyField:
  (controlMessageInfo) => dispatch(setSignInControlMessage(controlMessageInfo)),
  validateInput: ({ message, value }) => dispatch(validateSignInEmail({ message, email: value })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
