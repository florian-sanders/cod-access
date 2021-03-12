import ExerciseManager from 'src/components/ExerciseManager';
import { connect } from 'react-redux';

import { postQuestionManager } from 'src/actions/exerciseManager/questionManager';

import {
  setExerciseManagerFieldValue,
  patchExerciseManager,
  postExerciseManager,
  setExerciseManagerIsLeaving,
  deleteExerciseManager,
} from 'src/actions/exerciseManager/';

const mapStateToProps = ({ exerciseManager, questionManager, other }) => ({
  title: exerciseManager.title,
  brief: exerciseManager.brief,
  themes: exerciseManager.themes,
  error: exerciseManager.error,
  published: exerciseManager.published,
  loading: other.loading || exerciseManager.loading,
  updateLoading: exerciseManager.updateLoading,
  isSaved: exerciseManager.isSaved,
  questions: [...questionManager.questions],
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => dispatch(setExerciseManagerFieldValue(value, name)),
  createQuestion: () => dispatch(postQuestionManager()),
  createExercise: () => dispatch(postExerciseManager()),
  removeExercise: () => dispatch(deleteExerciseManager()),
  saveOnBlur: () => dispatch(patchExerciseManager()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseManager);
