import { nanoid } from 'nanoid';

import {
  SET_QUESTION_MANAGER_FIELD_VALUE,
  CREATE_QUESTION,
  DELETE_QUESTION,
} from 'src/actions/exerciseManager/questionManager';

const initialState = {
  questions: [],
};

const questionManager = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_QUESTION_MANAGER_FIELD_VALUE:
      return {
        ...state,
        questions: state.questions.map((question) => {
          const updatedQuestion = { ...question };
          if (question.id === action.questionId) {
            updatedQuestion[action.name] = action.value;
          }

          return updatedQuestion;
        }),
      };
    case CREATE_QUESTION:
      return {
        ...state,
        questions: [
          ...state.questions,
          {
            id: nanoid(),
            brief: '',
            code: '',
            explanation: '',
            picturePath: '',
            possibleAnswers: [],
          },
        ],
      };
    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== action.questionId,
        ),
      };
    default:
      return state;
  }
};

export default questionManager;
