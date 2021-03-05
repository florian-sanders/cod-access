import { connect } from 'react-redux';
import ExercicesPage from 'src/components/ExercicesPage';
import { fetchThemesExercices } from 'src/actions/exercices';

const mapStateToProps = (state) => ({
  allThemesExercices: state.exercices.allThemesExercices,
});

const mapDispatchToProps = (dispatch) => ({
  fetchThemesExercices: () => dispatch(fetchThemesExercices),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExercicesPage);
