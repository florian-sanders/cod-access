import { connect } from 'react-redux';
import AdminExercisesList from 'src/components/AdminExercisesList';
import {
  fetchExercises,
  deleteExercise,
} from 'src/actions/adminExercisesList';

const mapStateToProps = ({ adminExercisesList: { exercises, loadingExercisesList } }) => ({
  totalPages: Math.ceil(exercises.count / 20),
  exercises: exercises.rows,
  loadingExercisesList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchExercises: (page) => dispatch(fetchExercises(page)),
  deleteExercise: (idExercise) => dispatch(deleteExercise(idExercise)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminExercisesList);
