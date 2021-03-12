import { connect } from 'react-redux';
import AnswerManager from 'src/components/ExerciseManager/AnswerManager';

import {
  setAnswerManagerFieldValue,
  patchAnswerManager,
  deleteAnswerManager,
} from 'src/actions/exerciseManager/answerManager';

const mapStateToProps = (
  {
    answerManager: {
      possibleAnswers,
      updateLoading,
      error,
      loading,
      isSaved,
    },
  }, { id },
) => {
  const thisAnswer = possibleAnswers.find((answer) => answer.id === id);

  return {
    ...thisAnswer,
    updateLoading,
    error,
    loading,
    isSaved,
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  changeValue: (value, name) => dispatch(setAnswerManagerFieldValue({
    value,
    name,
    answerId: id,
  })),
  removeAnswer: () => dispatch(deleteAnswerManager(id)),
  saveOnBlur: () => dispatch(patchAnswerManager(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerManager);
