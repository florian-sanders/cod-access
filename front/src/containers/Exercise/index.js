import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Exercise from 'src/components/Exercise';

import {
  fetchExercise,
  showQuestion,
  sendAnswers,
  resetCurrentExercise,
} from 'src/actions/exercises';

const mapStateToProps = ({
  exercises: { currentExercise },
  other: { messageParams },
}) => ({
  ...currentExercise,
  messageParams,
});

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
