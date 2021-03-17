import { connect } from 'react-redux';
import SignUp from 'src/components/SignUp';
import {
  setSignUpFieldValue,
  trySignUp,
  setSignUpControlMessage,
  validateSignUpEmail,
  testSignUpPasswordStrength,
  compareSignUpPasswordConfirm,
} from 'src/actions/signup';

const mapStateToProps = (state) => ({
  email: state.signup.email,
  pseudo: state.signup.pseudo,
  password: state.signup.password,
  passwordConfirm: state.signup.passwordConfirm,
  loading: state.signup.loading,
  isSignedUp: state.signup.isSignedUp,
  messageParams: state.other.messageParams,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setSignUpFieldValue(value, name)),
  trySignUp: () => dispatch(trySignUp()),
  setControlMessage:
    ({ message, name, value }) => dispatch(setSignUpControlMessage({ message, name, value })),
  validateEmail: ({ message, value }) => dispatch(validateSignUpEmail({ message, email: value })),
  testPasswordStrength: ({ message, value }) => dispatch(
    testSignUpPasswordStrength({ message, password: value }),
  ),
  comparePasswordConfirm: ({ message, value }) => dispatch(
    compareSignUpPasswordConfirm({ message, password: value }),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
