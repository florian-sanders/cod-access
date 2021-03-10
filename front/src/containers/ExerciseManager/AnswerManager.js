import { connect } from 'react-redux';
import AnswerManager from 'src/components/ExerciseManager/AnswerManager';

import {
  setAnswerManagerFieldValue,
  createAnswer,
  deleteAnswer,
} from 'src/actions/exerciseManager/answerManager';

const mapStateToProps = ({ answerManager: { possibleAnswers } }, { id }) => {
  const thisAnswer = possibleAnswers.find((answer) => answer.id === id);

  return {
    id: thisAnswer.id,
    content: thisAnswer.content,
    correct: thisAnswer.correct,
  };
};

const mapDispatchToProps = (dispatch, { questionId, id }) => ({
  changeValue: (value, name) => dispatch(setAnswerManagerFieldValue({
    value,
    name,
    answerId: id,
  })),
  removeAnswer: () => dispatch(deleteAnswer(id)),
  addAnswer: () => dispatch(createAnswer(questionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerManager);
