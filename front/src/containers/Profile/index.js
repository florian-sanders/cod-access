import { connect } from 'react-redux';
import Profile from 'src/components/Profile';
import { checkIsSignedIn } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  email: state.auth.user.email,
  pseudo: state.auth.user.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(checkIsSignedIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
