import { connect } from 'react-redux';
import App from 'src/components/App';

import { checkIsSignedIn, getCSRFToken } from 'src/actions/auth';
import { fetchThemes } from 'src/actions/other';

const mapStateToProps = (state) => ({
  appLoading: state.other.appLoading,
  modalConfirmParams: state.other.modalConfirmParams,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(checkIsSignedIn()),
  getCSRFToken: () => dispatch(getCSRFToken()),
  loadThemes: () => dispatch(fetchThemes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
