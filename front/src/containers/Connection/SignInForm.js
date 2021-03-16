import { connect } from 'react-redux';
import SignInForm from 'src/components/Connection/SignInForm';

import { trySignIn } from 'src/actions/auth';

const mapStateToProps = ({ other: { messageParams }}) => ({
  messageParams,
});

const mapDispatchToProps = (dispatch) => ({
  trySignIn: () => dispatch(trySignIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
