import { connect } from 'react-redux';
import StatusManager from 'src/components/ExerciseManager/StatusManager';

import {
  deleteExerciseManager,
  setExerciseManagerFieldValue,
  patchExerciseManager,
  setExerciseManagerIsLeaving,
} from 'src/actions/exerciseManager';
import { setModalConfirm } from 'src/actions/other';

const mapStateToProps = (state) => ({
  exerciseId: state.exerciseManager.id,
  isSaved: state.exerciseManager.isSaved,
  published: state.exerciseManager.published,
  updateLoading: state.exerciseManager.updateLoading,
  error: state.exerciseManager.error,
  modalConfirmParams: state.other.modalConfirmParams,
});

const mapDispatchToProps = (dispatch) => ({
  removeExercise: () => dispatch(deleteExerciseManager()),
  changeExerciseStatus: (exerciseInfo) => {
    dispatch(setExerciseManagerFieldValue(exerciseInfo));
    dispatch(patchExerciseManager(exerciseInfo));
  },
  displayModalConfirm: (modalConfirmParams) => dispatch(setModalConfirm(modalConfirmParams)),
  setIsLeaving: (status) => dispatch(setExerciseManagerIsLeaving(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusManager);
