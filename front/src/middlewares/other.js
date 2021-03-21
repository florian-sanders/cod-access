import {
  FETCH_THEMES,
  setThemes,
} from 'src/actions/other';

import {
  setThemeManagerCheckboxes,
} from 'src/actions/exerciseManager/themeManager';

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
        store.dispatch(setThemeManagerCheckboxes(response.data));
      }
      catch (err) {
        console.log(err);
      }
      return next(action);
    default:
      return next(action);
  }
};
