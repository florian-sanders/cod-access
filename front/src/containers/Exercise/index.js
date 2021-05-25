import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Exercise from 'src/components/Exercise';

import {
  fetchExercise,
  resetCurrentExercise,
} from 'src/actions/exercises';

import { unsetMessage } from 'src/actions/other';

const mapStateToProps = ({ exercises, other }) => ({
  ...exercises.currentExercise,
  messageParams: other.messageParams,
});

const mapDispatchToProps = (dispatch, { match }) => ({
  getExercise: () => dispatch(fetchExercise(match.params.exerciseId)),
  resetCurrentExercise: () => dispatch(resetCurrentExercise()),
  closeMessage: () => dispatch(unsetMessage()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Exercise),
);
