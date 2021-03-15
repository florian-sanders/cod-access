import { connect } from 'react-redux';
import Profile from 'src/components/Profile';
import {
  fetchProgressByTheme,
} from 'src/actions/auth';

const mapStateToProps = (state) => ({
  email: state.auth.user.email,
  pseudo: state.auth.user.pseudo,
  picturePath: state.auth.user.picturePath,
  progressByTheme: state.auth.user.progressByTheme,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProgressByTheme: () => dispatch(fetchProgressByTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
