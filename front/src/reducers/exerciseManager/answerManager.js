import {
  SET_ANSWER_MANAGER_FIELD_VALUE,
  SET_ANSWER_MANAGER,
  DELETE_ANSWER_MANAGER,
  SET_ANSWER_MANAGER_LOADING,
  SET_ANSWER_MANAGER_UPDATE_LOADING,
  SET_ANSWER_MANAGER_ERROR,
  SET_ANSWER_MANAGER_IS_SAVED,
} from 'src/actions/exerciseManager/answerManager';

const initialState = {
  loading: false,
  updateLoading: false,
  isSaved: true,
  possibleAnswers: [],
};

const answerManager = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ANSWER_MANAGER_ERROR:
      return {
        ...state,
        error: action.status,
      };
    case SET_ANSWER_MANAGER_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    case SET_ANSWER_MANAGER_UPDATE_LOADING:
      return {
        ...state,
        updateLoading: action.status,
      };
    case SET_ANSWER_MANAGER_FIELD_VALUE:
      return {
        ...state,
        isSaved: false,
        possibleAnswers: state.possibleAnswers.map((answer) => {
          const updatedAnswer = { ...answer };
          if (answer.id === action.answerId) {
            updatedAnswer[action.name] = action.value;
          }

          return updatedAnswer;
        }),
      };
    case SET_ANSWER_MANAGER:
      return {
        ...state,
        possibleAnswers: [
          ...state.possibleAnswers,
          action.answer,
        ],
      };
    case DELETE_ANSWER_MANAGER:
      return {
        ...state,
        possibleAnswers: state.possibleAnswers.filter(
          (answer) => answer.id !== action.answerId,
        ),
      };
    case SET_ANSWER_MANAGER_IS_SAVED:
      return {
        ...state,
        isSaved: action.status,
      };
    default:
      return state;
  }
};

export default answerManager;
