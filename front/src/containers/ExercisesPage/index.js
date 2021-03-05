import { connect } from 'react-redux';
import ExercisesPage from 'src/components/ExercisesPage';
import {
  fetchThemesExercises,
  toogleFilterThemeVisibility,
  setThemesFilter,
} from 'src/actions/exercises';

const mapStateToProps = (state) => ({
  allThemesExercises: state.exercises.allThemesExercises,
  loadingExercisesPage: state.exercises.loadingExercisesPage,
  themeFilterVisibility: state.exercises.themeFilterVisibility,
  themesFilter: state.exercises.themesFilter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchThemesExercises: () => dispatch(fetchThemesExercises()),
  toggleFilter: () => dispatch(toogleFilterThemeVisibility()),
  setThemesFilter: (themes) => dispatch(setThemesFilter(themes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesPage);
