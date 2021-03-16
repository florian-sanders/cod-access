import { connect } from 'react-redux';
import ForgetPage from 'src/components/ForgetPage';
import {
  setOnChangeText, setSendForEmail, setForgetControlMessage, validateForgetEmail,
} from 'src/actions/forget';

const mapStateToProps = (state) => ({
  email: state.forget.email,
  loading: state.forget.loading,
  isDone: state.forget.isContactDone,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeText: (text) => dispatch(setOnChangeText(text)),
  sendForEmail: () => dispatch(setSendForEmail()),
  setControlMessage: ({ message, name, value }) => dispatch(
    setForgetControlMessage({ message, name, value }),
  ),
  validateEmail: ({ message, value }) => {
    dispatch(validateForgetEmail({ message, email: value }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPage);
