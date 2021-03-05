import { connect } from 'react-redux';
import Filtre from 'src/components/ExercicesPage/Filtre';

const mapStateToProps = (state) => ({
  mobileMenuVisibility: state.other.themeFilterVisibility,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Filtre);
