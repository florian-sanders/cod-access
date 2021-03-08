import {
  FETCH_THEMES_EXERCISES,
  setThemesExercises,
  setExercisesPageLoading,
  setAllThemesFilterCheckbox,
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
        const ThemesFilterCheckbox = response.data.map((themeWithExercices) => (
          {
            id: themeWithExercices.id,
            name: themeWithExercices.name,
            color: themeWithExercices.color,
            checked: false,
          }));
        store.dispatch(setAllThemesFilterCheckbox(ThemesFilterCheckbox));
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
