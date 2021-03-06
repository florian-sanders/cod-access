import { connect } from 'react-redux';
import ExercisesPage from 'src/components/ExercisesPage';
import {
  fetchThemesExercises,
  toogleFilterThemeVisibility,
  setThemesFilter,
  setThemeCheckbox,
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
  handleCheckbox: (idTheme, checked) => dispatch(setThemeCheckbox(idTheme, checked)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesPage);
