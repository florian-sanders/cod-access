import { connect } from 'react-redux';
import SignUp from 'src/components/SignUp';
import {
  setFieldValue,
} from 'src/actions/signup';

const mapStateToProps = (state) => ({
  email: state.signup.email,
  pseudo: state.signup.pseudo,
  password: state.signup.password,
  passwordConfirm: state.signup.passwordConfirm,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => dispatch(setFieldValue(value, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
