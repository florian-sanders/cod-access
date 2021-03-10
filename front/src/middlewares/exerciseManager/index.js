import {
  POST_EXERCISE_MANAGER,
  PATCH_EXERCISE_MANAGER,
  setExerciseManagerIsSaved,
  setExerciseManagerLoading,
  setExerciseManagerUpdateLoading,
  setExerciseManagerError,
  setExerciseManager,
} from 'src/actions/exerciseManager';

import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case POST_EXERCISE_MANAGER:
      try {
        const { status, data } = await axiosInstance.post('/exercises/new_exercise', {
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
          exerciseManager: {
            id,
            title,
            brief,
            published,
          },
        } = store.getState();

        const { status, data } = await axiosInstance.get('/themes', {
          title,
          brief,
          published,
        });

        if (status !== 200) {
          throw new Error();
        }

        console.log(data);

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
    default:
      return next(action);
  }
};
