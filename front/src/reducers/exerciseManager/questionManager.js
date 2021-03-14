import {
  SET_QUESTION_MANAGER_FIELD_VALUE,
  SET_QUESTION_MANAGER,
  DELETE_QUESTION_MANAGER,
  SET_QUESTION_MANAGER_LOADING,
  SET_QUESTION_MANAGER_UPDATE_LOADING,
  SET_QUESTION_MANAGER_ERROR,
  SET_QUESTION_MANAGER_IS_SAVED,
  SET_QUESTION_MANAGER_FILE,
  SET_QUESTION_MANAGER_SELECTED_FILE,
  SET_QUESTION_MANAGER_IMAGE_ID,
  RESET_QUESTION_MANAGER_IMAGE,
} from 'src/actions/exerciseManager/questionManager';

import {
  SET_MANAGERS_FROM_DB,
  RESET_MANAGERS,
} from 'src/actions/exerciseManager';

const initialState = {
  loading: false,
  updateLoading: false,
  isSaved: true,
  questions: [],
};

const questionManager = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_QUESTION_MANAGER_IMAGE:
      return {
        ...state,
        isSaved: true,
        questions: state.questions.map((question) => {
          if (question.id === action.questionId) {
            question.imageId = null;
            question.imagePath = '';
          }

          return question;
        })
      }
    case SET_MANAGERS_FROM_DB:
      return {
        ...state,
        isSaved: true,
        questions: action.questions.map((question) => ({
          id: question.id,
          brief: question.brief,
          code: question.code,
          explanation: question.explanation,
          imageId: question.imageId,
          imagePath: question.imagePath,
          imageAlternative: question.imageAlternative,
          selectedFile: null,
        })),
      };
    case RESET_MANAGERS:
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
