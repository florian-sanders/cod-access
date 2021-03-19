import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Exercise from 'src/components/Exercise';

import {
  fetchExercise,
  showQuestion,
  sendAnswers,
  resetCurrentExercise,
} from 'src/actions/exercises';
import { unsetMessage } from 'src/actions/other';

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
  closeMessage: () => dispatch(unsetMessage()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Exercise),
);
