import {
  SET_EXERCISE_MANAGER,
  SET_EXERCISE_MANAGER_FIELD_VALUE,
  SET_EXERCISE_MANAGER_LOADING,
  SET_EXERCISE_MANAGER_UPDATE_LOADING,
  SET_EXERCISE_MANAGER_ERROR,
  SET_EXERCISE_MANAGER_IS_SAVED,
  SET_EXERCISE_MANAGER_IS_LEAVING,
  RESET_EXERCISE_MANAGER,
} from 'src/actions/exerciseManager';

const initialState = {
  loading: true,
  updateLoading: false,
  error: false,
  published: false,
  id: null,
  title: '',
  brief: '',
  isSaved: false,
  isLeaving: false,
};

const exerciseManager = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_EXERCISE_MANAGER:
      return {
        ...initialState,
      };
    case SET_EXERCISE_MANAGER:
      return {
        ...state,
        ...action.exercise,
      };
    case SET_EXERCISE_MANAGER_ERROR:
      return {
        ...state,
        error: action.status,
      };
    case SET_EXERCISE_MANAGER_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    case SET_EXERCISE_MANAGER_UPDATE_LOADING:
      return {
        ...state,
        updateLoading: action.status,
      };
    case SET_EXERCISE_MANAGER_FIELD_VALUE:
      return {
        ...state,
        isSaved: false,
        [action.name]: action.value,
      };
    case SET_EXERCISE_MANAGER_IS_SAVED:
      return {
        ...state,
        isSaved: action.status,
      };
    case SET_EXERCISE_MANAGER_IS_LEAVING:
      return {
        ...state,
        isLeaving: action.status,
      };
    default:
      return state;
  }
};

export default exerciseManager;
