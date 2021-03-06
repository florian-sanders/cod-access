import {
  FETCH_THEMES_EXERCISES,
  setThemesExercises,
  setExercisesPageLoading,
  setThemesFilter,
} from 'src/actions/exercises';
import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_THEMES_EXERCISES:
      try {
        store.dispatch(setExercisesPageLoading(true));
        const response = await axiosInstance.get('/themes_exercises');
        if (response.status !== 200) {
          throw new Error();
        }
        store.dispatch(setThemesExercises(response.data));
        const themes = {};
        for (let i = 0; i < response.data.length; i++) {
          themes[response.data[i].id] = {
            name: response.data[i].name,
            color: response.data[i].color,
            checked: false,
          };
        }
        store.dispatch(setThemesFilter(themes));
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
