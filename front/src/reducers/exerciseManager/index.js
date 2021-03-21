import {
  SET_EXERCISE_MANAGER,
  SET_EXERCISE_MANAGER_FIELD_VALUE,
  SET_EXERCISE_MANAGER_LOADING,
  SET_EXERCISE_MANAGER_UPDATE_LOADING,
  SET_EXERCISE_MANAGER_ERROR,
  SET_EXERCISE_MANAGER_IS_SAVED,
  SET_EXERCISE_MANAGER_IS_LEAVING,
  RESET_MANAGERS,
  SET_MANAGERS_FROM_DB,
} from 'src/actions/exerciseManager';
import {
  SET_QUESTION_MANAGER_SELECTED_FILE,
  SET_QUESTION_MANAGER_FIELD_VALUE,
} from 'src/actions/exerciseManager/questionManager';
import {
  SET_ANSWER_MANAGER_FIELD_VALUE,
} from 'src/actions/exerciseManager/answerManager';

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
    case SET_EXERCISE_MANAGER_IS_LEAVING:
      return {
        ...state,
        isLeaving: action.status,
      };
    case SET_QUESTION_MANAGER_FIELD_VALUE:
    case SET_ANSWER_MANAGER_FIELD_VALUE:
      return {
        ...state,
        isSaved: false,
      };
    case SET_QUESTION_MANAGER_SELECTED_FILE:
      return {
        ...state,
        isSaved: false,
      };
    case SET_MANAGERS_FROM_DB:
      return {
        ...state,
        ...action.exercise,
        loading: false,
        isSaved: true,
      };
    case RESET_MANAGERS:
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
