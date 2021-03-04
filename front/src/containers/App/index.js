import { connect } from 'react-redux';
import App from 'src/components/App';

import { checkIsSignedIn } from 'src/actions/auth';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  recoverAuth: () => dispatch(checkIsSignedIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
