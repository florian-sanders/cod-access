import { connect } from 'react-redux';
import PrivateRoute from 'src/components/PrivateRoute';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = () => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
