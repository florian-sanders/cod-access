import { connect } from 'react-redux';
import QuestionManager from 'src/components/ExerciseManager/QuestionManager';

import {
  setQuestionManagerFieldValue,
  deleteQuestion,
} from 'src/actions/exerciseManager/questionManager';

import { createAnswer } from 'src/actions/exerciseManager/answerManager';

const mapStateToProps = ({
  questionManager: { questions },
  answerManager: { possibleAnswers },
}, { id }) => {
  const thisQuestion = questions.find((question) => question.id === id);

  return {
    brief: thisQuestion.brief,
    code: thisQuestion.code,
    explanation: thisQuestion.explanation,
    picturePath: thisQuestion.picturePath,
    possibleAnswers: possibleAnswers.filter((answer) => answer.questionId === thisQuestion.id),
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  changeValue: (value, name) => dispatch(setQuestionManagerFieldValue({
    value,
    name,
    questionId: id,
  })),
  addAnswer: () => dispatch(createAnswer(id)),
  removeQuestion: () => dispatch(deleteQuestion(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionManager);
