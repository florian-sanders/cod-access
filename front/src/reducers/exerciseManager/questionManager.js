import {
  SET_QUESTION_MANAGER_FIELD_VALUE,
  SET_QUESTION_MANAGER,
  DELETE_QUESTION_MANAGER,
  SET_QUESTION_MANAGER_LOADING,
  SET_QUESTION_MANAGER_UPDATE_LOADING,
  SET_QUESTION_MANAGER_ERROR,
  SET_QUESTION_MANAGER_IS_SAVED,
  RESET_QUESTION_MANAGER,
  SET_QUESTION_MANAGER_FILE,
  SET_QUESTION_MANAGER_SELECTED_FILE,
  SET_QUESTION_MANAGER_IMAGE_ID,
} from 'src/actions/exerciseManager/questionManager';

const initialState = {
  loading: false,
  updateLoading: false,
  isSaved: true,
  questions: [],
};

const questionManager = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_QUESTION_MANAGER:
      return {
        ...initialState,
      };
    case SET_QUESTION_MANAGER_ERROR:
      return {
        ...state,
        error: action.status,
      };
    case SET_QUESTION_MANAGER_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    case SET_QUESTION_MANAGER_UPDATE_LOADING:
      return {
        ...state,
        updateLoading: action.status,
      };
    case SET_QUESTION_MANAGER_FIELD_VALUE:
      return {
        ...state,
        isSaved: false,
        questions: state.questions.map((question) => {
          const updatedQuestion = { ...question };
          if (question.id === action.questionId) {
            updatedQuestion[action.name] = action.value;
          }

          return updatedQuestion;
        }),
      };
    case SET_QUESTION_MANAGER:
      return {
        ...state,
        questions: [
          ...state.questions,
          action.question,
        ],
      };
    case DELETE_QUESTION_MANAGER:
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== action.questionId,
        ),
      };
    case SET_QUESTION_MANAGER_IS_SAVED:
      return {
        ...state,
        isSaved: action.status,
      };
    case SET_QUESTION_MANAGER_FILE:
      return {
        ...state,
        selectedFile: action.file,
      };
    case SET_QUESTION_MANAGER_SELECTED_FILE:
      return {
        ...state,
        isSaved: false,
        questions: state.questions.map((question) => {
          if (question.id === action.questionId) {
            question.selectedFile = action.file;
          }

          return question;
        }),
      };
    case SET_QUESTION_MANAGER_IMAGE_ID:
      console.log(action);
      return {
        ...state,
        questions: state.questions.map((question) => {
          if (question.id === action.questionId) {
            question.imageId = action.imageId;
          }

          return question;
        }),
      };
    default:
      return state;
  }
};

export default questionManager;
