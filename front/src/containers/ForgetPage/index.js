import { connect } from 'react-redux';
import ForgetPage from 'src/components/ForgetPage';
import { setOnChangeText, setSendForEmail } from 'src/actions/forget';

const mapStateToProps = (state) => ({
  email: state.forget.email,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeText: (text) => dispatch(setOnChangeText(text)),
  sendForEmail: () => dispatch(setSendForEmail()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPage);
