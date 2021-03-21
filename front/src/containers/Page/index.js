import { connect } from 'react-redux';
import Page from 'src/components/Page';
import { setConnectionVisibility } from 'src/actions/auth';
import { setMobileMenuVisibility } from 'src/actions/other';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  role: state.auth.user.role,
  connectionMenuVisibility: state.auth.isVisible,
  mobileMenuVisibility: state.other.mobileMenuVisibility,
});

const mapDispatchToProps = (dispatch) => ({
  closeConnectionMenu: () => dispatch(setConnectionVisibility(false)),
  closeMobileMenu: () => dispatch(setMobileMenuVisibility(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
