import { connect } from 'react-redux';
import Answer from 'src/components/Admin/Exercise/Answer';

import {
  setCreateAnswerFieldValue,
  deleteAnswer,
} from 'src/actions/admin/exercises';

const mapStateToProps = ({ admin: { newExercise: { questions } } }, { questionId, id }) => {
  const thisQuestion = questions.find((question) => question.id === questionId);
  const thisAnswer = thisQuestion.possibleAnswers.find((answer) => answer.id === id);
  console.log(thisAnswer);
  return {
    id: thisAnswer.id,
    content: thisAnswer.content,
    correct: thisAnswer.correct,
  };
};

const mapDispatchToProps = (dispatch, { questionId, id }) => ({
  changeValue: (value, name) => dispatch(setCreateAnswerFieldValue({
    value,
    name,
    questionId,
    answerId: id,
  })),
  removeAnswer: () => dispatch(deleteAnswer({
    questionId,
    answerId: id,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
