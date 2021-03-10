import ExerciseManager from 'src/components/ExerciseManager';
import { connect } from 'react-redux';

import { createQuestion } from 'src/actions/exerciseManager/questionManager';

import {
  setExerciseManagerFieldValue,
  toggleExerciseManagerTheme,
  saveExercise,
} from 'src/actions/exerciseManager/';

const mapStateToProps = ({ exerciseManager, questionManager, other }) => ({
  ...exerciseManager,
  loading: other.loading,
  questions: [...questionManager.questions],
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => dispatch(setExerciseManagerFieldValue(value, name)),
  handleCheckbox: (themeId) => dispatch(toggleExerciseManagerTheme(themeId)),
  addQuestion: () => dispatch(createQuestion()),
  save: () => dispatch(saveExercise()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseManager);
