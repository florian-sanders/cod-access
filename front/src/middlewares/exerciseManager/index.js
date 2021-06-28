import {
  POST_EXERCISE_MANAGER,
  PATCH_EXERCISE_MANAGER,
  DELETE_EXERCISE_MANAGER,
  FETCH_EXERCISE_MANAGER,
  SET_EXERCISE_MANAGER_STATUS,
  setExerciseManagerIsSaved,
  setExerciseManagerLoading,
  setExerciseManagerUpdateLoading,
  setExerciseManagerError,
  setExerciseManager,
  resetManagers,
  setManagersFromDB,
} from 'src/actions/exerciseManager';

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
        store.dispatch(setExerciseManagerIsSaved(false));
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
        store.dispatch(setExerciseManagerError(true));
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

        store.dispatch(resetManagers(themes.data));
      }
      catch (err) {
        console.log(err);
        store.dispatch(setExerciseManagerError(true));
      }
      finally {
        store.dispatch(setExerciseManagerUpdateLoading(false));
      }
      return next(action);
    case FETCH_EXERCISE_MANAGER:
      try {
        store.dispatch(setExerciseManagerUpdateLoading(true));

        const { data: exerciseData, status } = await axiosInstance.get(`/admin/exercises/${action.exerciseId}`);

        if (status !== 200) {
          throw new Error('Exercise get fail');
        }

        const exercise = {
          id: exerciseData.id,
          title: exerciseData.title,
          brief: exerciseData.brief,
          published: exerciseData.published,
        };

        const themes = exerciseData.themes.map((theme) => theme.id);

        const questions = exerciseData.questions.map((question) => ({
          id: question.id,
          brief: question.brief,
          code: question.code,
          explanation: question.explanation,
          imageId: question.picture_id,
          imageAlternative: question.question_picture
            ? question.question_picture.alternative
            : '',
          imagePath: question.question_picture
            ? question.question_picture.path
            : '',
          selectedFile: null,
        }));

        const possibleAnswers = exerciseData.questions.map(
          (question) => question.possible_answers,
        ).flat();

        store.dispatch(setManagersFromDB({
          exercise,
          themes,
          questions,
          possibleAnswers,
        }));
      }
      catch (err) {
        console.log(err);
        store.dispatch(setExerciseManagerError(true));
      }
      finally {
        store.dispatch(setExerciseManagerUpdateLoading(false));
      }
      return next(action);
    default:
      return next(action);
  }
};
