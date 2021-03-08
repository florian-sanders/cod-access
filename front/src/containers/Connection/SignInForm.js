import { connect } from 'react-redux';
import SignInForm from 'src/components/Connection/SignInForm';

import { trySignIn } from 'src/actions/auth';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  trySignIn: () => dispatch(trySignIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
