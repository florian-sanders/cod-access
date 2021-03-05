import {
  FETCH_THEMES_EXERCICES,
  setThemesExercices,
  setExercicesPageLoading,
} from 'src/actions/exercices';
import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_THEMES_EXERCICES:
      try {
        store.dispatch(setExercicesPageLoading(true));
        const response = await axiosInstance.get('/themes_exercices');

        if (response.status !== 200) {
          throw new Error();
        }

        store.dispatch(setThemesExercices(response.data));
      }
      catch (err) {
        console.log('error', err);
      }
      finally {
        store.dispatch(setExercicesPageLoading(false));
      }
      return next(action);
    default:
      return next(action);
  }
};
