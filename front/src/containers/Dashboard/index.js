import { connect } from 'react-redux';
import Dashboard from 'src/components/Dashboard';

const mapStateToProps = (state) => ({
  role: state.auth.user.role,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
