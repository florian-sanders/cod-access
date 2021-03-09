import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Exercise from 'src/components/Exercise';

import {
  fetchExercise,
  showQuestion,
  sendAnswers,
} from 'src/actions/exercises';

const mapStateToProps = ({ exercises: { currentExercise } }) => ({
  ...currentExercise,
});

const mapDispatchToProps = (dispatch, { match: { params: { exerciseId } } }) => ({
  getExercise: () => dispatch(fetchExercise(exerciseId)),
  changeQuestion: (questionIndex) => dispatch(showQuestion(questionIndex)),
  submitAnswers: () => dispatch(sendAnswers()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Exercise),
);
