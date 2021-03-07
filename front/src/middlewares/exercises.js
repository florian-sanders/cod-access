import {
  FETCH_THEMES_EXERCISES,
  setThemesExercises,
  setExercisesPageLoading,
} from 'src/actions/exercises';
import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_THEMES_EXERCISES:
      try {
        store.dispatch(setExercisesPageLoading(true));
        const response = await axiosInstance.get('/themes_exercises');
        console.log(response);
        if (response.status !== 200) {
          throw new Error();
        }
        store.dispatch(setThemesExercises(response.data));
      }
      catch (err) {
        console.log('error', err);
      }
      finally {
        store.dispatch(setExercisesPageLoading(false));
      }
      return next(action);
    default:
      return next(action);
  }
};
