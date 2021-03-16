import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Exercise from 'src/components/Exercise';

import {
  fetchExercise,
  showQuestion,
  sendAnswers,
  resetCurrentExercise,
} from 'src/actions/exercises';

const mapStateToProps = ({ exercises: { currentExercise } }) => {
  let resultMessage = '';
  if (currentExercise.userScore === 100) {
    resultMessage = `Bravo, c'est vraiment toi le meilleur. Tu as obtenu ${currentExercise.userScore}.`;
  }
  else if (currentExercise.userScore > 50) {
    resultMessage = `Pas mal moussaillon. Il y a encore du boulot mais tu as obtenu ${currentExercise.userScore}`;
  }
  else {
    resultMessage = `C'est la cata moussaillon. tu n'as obtenu que ${currentExercise.userScore}`;
  }

  return {
    ...currentExercise,
    resultMessage,
  };
};

const mapDispatchToProps = (dispatch, { match: { params: { exerciseId } } }) => ({
  getExercise: () => dispatch(fetchExercise(exerciseId)),
  changeQuestion: (questionIndex) => dispatch(showQuestion(questionIndex)),
  submitAnswers: () => dispatch(sendAnswers()),
  resetCurrentExercise: () => dispatch(resetCurrentExercise()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Exercise),
);
