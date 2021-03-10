import { connect } from 'react-redux';
import NewPasswordPage from 'src/components/NewPasswordPage';
import { setOnChangePass, setValidNewPassword } from 'src/actions/forget';

const mapStateToProps = (state) => ({
  password: state.forget.password,
  passwordConfirm: state.forget.passwordConfirm,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeTextPass: (payload, payload2) => dispatch(setOnChangePass(payload, payload2)),
  validNewPassword: (token) => dispatch(setValidNewPassword(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPasswordPage);
