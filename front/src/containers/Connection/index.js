import { connect } from 'react-redux';
import Connection from 'src/components/Connection';
import { toggleConnectionVisibility } from 'src/actions/auth';

const mapStateToProps = ({ auth: { isVisible, isLogged } }) => ({
  isVisible,
  isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  toggleConnection: () => dispatch(toggleConnectionVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
