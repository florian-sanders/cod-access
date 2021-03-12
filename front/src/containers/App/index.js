import { connect } from 'react-redux';
import App from 'src/components/App';

import { checkIsSignedIn, getCSRFToken } from 'src/actions/auth';
import { fetchThemes } from 'src/actions/other'

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(checkIsSignedIn()),
  getCSRFToken: () => dispatch(getCSRFToken()),
  loadThemes: () => dispatch(fetchThemes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
