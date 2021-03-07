import { connect } from 'react-redux';
import ExercisesPage from 'src/components/ExercisesPage';
import { fetchThemesExercises, toogleFilterThemeVisibility } from 'src/actions/exercises';

const mapStateToProps = (state) => ({
  allThemesExercises: state.exercises.allThemesExercises,
  loadingExercisesPage: state.exercises.loadingExercisesPage,
  themeFilterVisibility: state.exercises.themeFilterVisibility,
});

const mapDispatchToProps = (dispatch) => ({
  fetchThemesExercises: () => dispatch(fetchThemesExercises()),
  toggleFilter: () => dispatch(toogleFilterThemeVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesPage);
