import { connect } from 'react-redux';
import ExercisesPage from 'src/components/ExercisesPage';
import {
  fetchThemesExercises,
  toogleFilterThemeVisibility,
  setAllThemesFilterCheckbox,
  setThemeCheckbox,
  setThemesExercises,
  setThemesIdToDisplay,
} from 'src/actions/exercises';

const mapStateToProps = (state) => ({
  allExercises: state.exercises.allExercises,
  loadingExercisesPage: state.exercises.loadingExercisesPage,
  themeFilterVisibility: state.exercises.themeFilterVisibility,
  themesFilterCheckbox: state.exercises.themesFilterCheckbox,
  themesIdToDisplay: state.exercises.themesIdToDisplay,
});

const mapDispatchToProps = (dispatch) => ({
  fetchThemesExercises: () => dispatch(fetchThemesExercises()),
  toggleFilter: () => dispatch(toogleFilterThemeVisibility()),
  setAllThemesFilterCheckbox: (themes) => dispatch(setAllThemesFilterCheckbox(themes)),
  handleCheckbox: (idTheme, checked) => dispatch(setThemeCheckbox(idTheme, checked)),
  setThemesExercises: (allThemeExercices) => dispatch(setThemesExercises(allThemeExercices)),
  validateFilter: () => {
    dispatch(setThemesIdToDisplay());
    dispatch(toogleFilterThemeVisibility());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ExercisesPage);
