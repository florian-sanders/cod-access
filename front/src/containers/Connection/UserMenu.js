import { connect } from 'react-redux';
import UserMenu from 'src/components/Connection/UserMenu';

import { signOut } from 'src/actions/auth';

const mapStateToProps = ({ auth }) => ({
  pseudo: auth.user.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
