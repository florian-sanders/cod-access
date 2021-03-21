import { connect } from 'react-redux';
import NewPasswordPage from 'src/components/NewPasswordPage';
import {
  setOnChangePass,
  setValidNewPassword,
  setPasswordControlMessage,
  validatePassword,
  compareNewPasswordConfirm,
} from 'src/actions/forget';

const mapStateToProps = (state) => ({
  password: state.forget.password,
  passwordConfirm: state.forget.passwordConfirm,
  loading: state.forget.loading,
  isDone: state.forget.isNewPassDone,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeTextPass: (payload, payload2) => dispatch(setOnChangePass(payload, payload2)),
  validNewPassword: (token) => dispatch(setValidNewPassword(token)),
  setPasswordControlMessage: ({
    message, name, value,
  }) => dispatch(
    setPasswordControlMessage({
      message, name, value,
    }),
  ),
  validatePassword: ({ message, value }) => {
    dispatch(validatePassword({ message, password: value }));
  },
  compareNewPasswordConfirm: ({ message, value, value2 }) => {
    dispatch(compareNewPasswordConfirm({ message, password: value, passwordConfirm: value2 }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPasswordPage);
