import { connect } from 'react-redux';
import Profile from 'src/components/Profile';

const mapStateToProps = (state) => ({
  email: state.auth.user.email,
  pseudo: state.auth.user.pseudo,
  picturePath: state.auth.user.picturePath,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
