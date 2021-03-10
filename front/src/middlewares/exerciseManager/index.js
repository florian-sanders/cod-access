import {
  SAVE_EXERCISE,
  setThemes,
  setLoading,
} from 'src/actions/exerciseManager';

import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    default:
      return next(action);
  }
};
