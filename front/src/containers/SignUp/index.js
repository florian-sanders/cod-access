import { connect } from 'react-redux';
import SignUp from 'src/components/SignUp';
import {
  setSignUpFieldValue,
  trySignUp,
  setSignUpControlMessage,
  validateSignUpEmail,
  testSignUpPasswordStrength,
} from 'src/actions/signup';

const mapStateToProps = (state) => ({
  email: state.signup.email,
  pseudo: state.signup.pseudo,
  password: state.signup.password,
  passwordConfirm: state.signup.passwordConfirm,
  loading: state.signup.loading,
  isSignedUp: state.signup.isSignedUp,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setSignUpFieldValue(value, name)),
  trySignUp: () => dispatch(trySignUp()),
  setControlMessage:
    ({ message, name, value }) => dispatch(setSignUpControlMessage({ message, name, value })),
  validateEmail: ({ message, value }) => dispatch(validateSignUpEmail({ message, email: value })),
  testPasswordStrength: ({ message, password }) => dispatch(
    testSignUpPasswordStrength({ message, password }),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
