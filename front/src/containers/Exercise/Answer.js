import { connect } from 'react-redux';
import Answer from 'src/components/Exercise/Answer';

import { removeUserAnswer } from 'src/actions/exercises';

const mapStateToProps = ({
  exercises: {
    currentExercise: {
      questions,
    },
  },
}, { }) => ({
  /* console.log('o', id);
  const thisQuestion = questions.find((question) => question.id === questionId);

  const thisAnswer = thisQuestion.possible_answers.find((answer) => answer.id === id);
  console.log(thisAnswer);
  return {
    isRightAnswer: thisAnswer.isRightAnswer || false,
    userCorrect: thisAnswer.userCorrect || false,
    isCorrected: thisAnswer.isCorrected || false,
  }; */
});

const mapDispatchToProps = (dispatch) => ({
  removeAnswer: (answerInfo) => dispatch(removeUserAnswer(answerInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
