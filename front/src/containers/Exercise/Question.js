import { connect } from 'react-redux';
import Question from 'src/components/Exercise/Question';

import { setNewUserAnswer } from 'src/actions/exercises';

const mapStateToProps = ({ exercises: { currentExercise } }, { questionIndex }) => {
  const thisQuestion = currentExercise.questions[questionIndex];

  return {
    userAnswers: thisQuestion.userAnswers,
    isHidden: currentExercise.currentQuestionIndex !== questionIndex,
    explanation: thisQuestion.explanation,
  };
};

const mapDispatchToProps = (dispatch) => ({
  newUserAnswer: (answerInfo) => dispatch(setNewUserAnswer(answerInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
