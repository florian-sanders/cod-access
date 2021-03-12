import {
  POST_EXERCISE_MANAGER,
  PATCH_EXERCISE_MANAGER,
  DELETE_EXERCISE_MANAGER,
  setExerciseManagerIsSaved,
  setExerciseManagerLoading,
  setExerciseManagerUpdateLoading,
  setExerciseManagerError,
  setExerciseManager,
  resetExerciseManager,
  postExerciseManager,
} from 'src/actions/exerciseManager';
import { resetQuestionManager } from 'src/actions/exerciseManager/questionManager';
import { resetAnswerManager } from 'src/actions/exerciseManager/answerManager';
import { setThemeManagerCheckboxes } from 'src/actions/exerciseManager/themeManager';

import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case POST_EXERCISE_MANAGER:
      try {
        const { status, data } = await axiosInstance.post('/admin/exercises/new_exercise', {
          title: '',
          brief: '',
          published: false,
        });

        if (status !== 200) {
          throw new Error();
        }

        store.dispatch(setExerciseManager({
          id: data.id,
          title: data.title,
          brief: data.brief,
          published: data.published,
        }));

        store.dispatch(setExerciseManagerIsSaved(true));
      }
      catch (err) {
        console.log(err);
        store.dispatch(setExerciseManagerError(true));
      }
      finally {
        store.dispatch(setExerciseManagerLoading(false));
      }
      return next(action);
    case PATCH_EXERCISE_MANAGER:
      try {
        store.dispatch(setExerciseManagerUpdateLoading(true));
        const {
          exerciseManager,
        } = store.getState();

        const { status } = await axiosInstance.patch(`/admin/exercises/${exerciseManager.id}`, {
          id: exerciseManager.id,
          title: exerciseManager.title,
          brief: exerciseManager.brief,
          published: exerciseManager.published,
        });

        if (status !== 200) {
          throw new Error();
        }

        store.dispatch(setExerciseManagerIsSaved(true));
      }
      catch (err) {
        console.log(err);
        //store.dispatch(setExerciseManagerError(true));
      }
      finally {
        store.dispatch(setExerciseManagerUpdateLoading(false));
      }
      return next(action);
    case DELETE_EXERCISE_MANAGER:
      try {
        store.dispatch(setExerciseManagerUpdateLoading(true));
        const {
          exerciseManager,
          other: { themes },
        } = store.getState();

        const { status: statusExercise } = await axiosInstance.delete(`/admin/exercises/${exerciseManager.id}`);

        if (statusExercise !== 200) {
          throw new Error('Exercise delete fail');
        }

        store.dispatch(resetExerciseManager());
        store.dispatch(resetQuestionManager());
        store.dispatch(resetAnswerManager());
        store.dispatch(setThemeManagerCheckboxes(themes.data));
      }
      catch (err) {
        console.log(err);
        //store.dispatch(setExerciseManagerError(true));
      }
      finally {
        store.dispatch(setExerciseManagerUpdateLoading(false));
      }
      return next(action);
    default:
      return next(action);
  }
};
