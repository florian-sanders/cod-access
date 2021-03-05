import {
  SET_THEMES_EXERCICES,
  SET_EXERCICESPAGE_LOADING,
} from 'src/actions/exercices';

const initialState = {
  allThemesExercices: [],
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_THEMES_EXERCICES:
      return {
        ...state,
        allThemesExercices: action.data,
      };
    case SET_EXERCICESPAGE_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default reducer;
