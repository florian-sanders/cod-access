import { connect } from 'react-redux';
import Menu from 'src/components/Menu';
import { toggleMenuVisibility } from 'src/actions/other';

const mapStateToProps = ({ other: { mobileMenuVisibility } }) => ({
  mobileMenuVisibility,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenuVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
