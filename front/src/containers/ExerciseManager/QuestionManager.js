import { connect } from 'react-redux';
import QuestionManager from 'src/components/ExerciseManager/QuestionManager';

import {
  patchQuestionManager,
  setQuestionManagerFieldValue,
  deleteQuestionManager,
} from 'src/actions/exerciseManager/questionManager';

import { postAnswerManager } from 'src/actions/exerciseManager/answerManager';

const mapStateToProps = ({
  questionManager: {
    questions,
    loading,
    error,
    updateLoading,
    isSaved,
  },
  answerManager: { possibleAnswers },
}, { id }) => {
  const thisQuestion = questions.find((question) => question.id === id);

  return {
    brief: thisQuestion.brief,
    code: thisQuestion.code,
    explanation: thisQuestion.explanation,
    updateLoading,
    error,
    loading,
    isSaved,
    // picturePath: thisQuestion.picturePath,
    possibleAnswers: possibleAnswers.filter((answer) => answer.questionId === thisQuestion.id),
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  changeValue: (value, name) => dispatch(setQuestionManagerFieldValue({
    value,
    name,
    questionId: id,
  })),
  removeQuestion: () => dispatch(deleteQuestionManager(id)),
  createAnswer: () => dispatch(postAnswerManager(id)),
  saveOnBlur: () => dispatch(patchQuestionManager(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionManager);
