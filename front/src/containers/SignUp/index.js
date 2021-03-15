import { connect } from 'react-redux';
import SignUp from 'src/components/SignUp';
import {
  setSignUpFieldValue,
  trySignUp,
  setSignUpControlMessage,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
