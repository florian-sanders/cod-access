import { connect } from 'react-redux';
import Page from 'src/components/Page';
import { setConnectionVisibility } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  role: state.auth.user.role,
  connectionMenuVisibility: state.auth.isVisible,
});

const mapDispatchToProps = (dispatch) => ({
  closeConnectionMenu: () => dispatch(setConnectionVisibility(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
