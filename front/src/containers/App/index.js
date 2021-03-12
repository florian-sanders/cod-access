import { connect } from 'react-redux';
import App from 'src/components/App';

import { checkIsSignedIn, getCSRFToken } from 'src/actions/auth';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(checkIsSignedIn()),
  getCSRFToken: () => dispatch(getCSRFToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
