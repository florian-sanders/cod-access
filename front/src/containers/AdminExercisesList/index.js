import { connect } from 'react-redux';
import AdminExercisesList from 'src/components/AdminExercisesList';
import {
  fetchExercises,
  deleteExercise,
} from 'src/actions/adminExercisesList';
import {
  setModalConfirm,
  setMessage,
} from 'src/actions/other';

const mapStateToProps = ({
  adminExercisesList: { exercises, loadingExercisesList },
  other: { messageParams },
}) => ({
  totalPages: Math.ceil(exercises.count / 20),
  exercises: exercises.rows,
  loadingExercisesList,
  messageParams,
});

const mapDispatchToProps = (dispatch) => ({
  fetchExercises: (page) => dispatch(fetchExercises(page)),
  deleteExercise: ({ exerciseId }) => dispatch(deleteExercise(exerciseId)),
  displayModalConfirm: (modalConfirmParams) => dispatch(setModalConfirm(modalConfirmParams)),
  displayMessage: (messageParams) => dispatch(setMessage(messageParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminExercisesList);
