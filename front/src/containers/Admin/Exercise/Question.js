import { connect } from 'react-redux';
import Question from 'src/components/Admin/Exercise/Question';

import {
  setCreateQuestionFieldValue,
  createAnswer,
  deleteQuestion,
} from 'src/actions/admin/exercises';

const mapStateToProps = ({ admin: { newExercise: { questions } } }, { id }) => {
  const thisQuestion = questions.find((question) => question.id === id);

  return {
    brief: thisQuestion.brief,
    code: thisQuestion.code,
    explanation: thisQuestion.explanation,
    picturePath: thisQuestion.picturePath,
    possibleAnswers: thisQuestion.possibleAnswers,
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  changeValue: (value, name) => dispatch(setCreateQuestionFieldValue({
    value,
    name,
    questionId: id,
  })),
  addAnswer: () => dispatch(createAnswer(id)),
  removeQuestion: () => dispatch(deleteQuestion(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
