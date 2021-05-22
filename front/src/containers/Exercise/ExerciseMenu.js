import { connect } from 'react-redux';
import ExerciseMenu from 'src/components/Exercise/ExerciseMenu';

import {
  showQuestion,
  sendAnswers,
} from 'src/actions/exercises';

const mapStateToProps = ({ exercises }) => ({
  currentQuestionIndex: exercises.currentExercise.currentQuestionIndex,
  resultsLoading: exercises.currentExercise.resultsLoading,
  questions: exercises.currentExercise.questions,
  isCorrected: exercises.currentExercise.isCorrected,
});

const mapDispatchToProps = (dispatch) => ({
  changeQuestion: (questionIndex) => dispatch(showQuestion(questionIndex)),
  submitAnswers: () => dispatch(sendAnswers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseMenu);
