import {
  FETCH_THEMES,
  setThemes,
} from 'src/actions/other';

import {
  setExerciseManagerThemes,
} from 'src/actions/exerciseManager';

import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_THEMES:
      try {
        const response = await axiosInstance.get('/themes');

        if (response.status !== 200) {
          throw new Error();
        }

        store.dispatch(setThemes(response.data));
        store.dispatch(setExerciseManagerThemes(response.data));
      }
      catch (err) {
        console.log(err);
      }
      return next(action);
    default:
      return next(action);
  }
};
