import Exercise from 'src/components/Admin/Exercise';
import { connect } from 'react-redux';

import { createQuestion } from 'src/actions/admin/exercises';

import {
  fetchThemes,
  setCreateExerciseFieldValue,
  toggleThemeChecked,
  saveExercise,
} from 'src/actions/admin/exercises';

const mapStateToProps = ({ admin: { newExercise } }) => ({
  loading: newExercise.loading,
  themes: newExercise.themes,
  title: newExercise.title,
  brief: newExercise.brief,
  questions: newExercise.questions,
});

const mapDispatchToProps = (dispatch) => ({
  getThemes: () => dispatch(fetchThemes()),
  changeValue: (value, name) => dispatch(setCreateExerciseFieldValue(value, name)),
  handleCheckbox: (themeId) => dispatch(toggleThemeChecked(themeId)),
  addQuestion: () => dispatch(createQuestion()),
  save: () => dispatch(saveExercise()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);
