import { nanoid } from 'nanoid';

import {
  SET_ANSWER_MANAGER_FIELD_VALUE,
  CREATE_ANSWER,
  DELETE_ANSWER,
} from 'src/actions/exerciseManager/answerManager';

const initialState = {
  possibleAnswers: [],
};

const answerManager = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ANSWER_MANAGER_FIELD_VALUE:
      return {
        ...state,
        possibleAnswers: state.possibleAnswers.map((answer) => {
          const updatedAnswer = { ...answer };
          if (answer.id === action.answerId) {
            updatedAnswer[action.name] = action.value;
          }

          return updatedAnswer;
        }),
      };
    case CREATE_ANSWER:
      return {
        ...state,
        possibleAnswers: [
          ...state.possibleAnswers,
          {
            questionId: action.questionId,
            id: nanoid(),
            content: '',
            correct: false,
          },
        ],
      };
    case DELETE_ANSWER:
      return {
        ...state,
        possibleAnswers: state.possibleAnswers.filter(
          (answer) => answer.id !== action.answerId,
        ),
      };
    default:
      return state;
  }
};

export default answerManager;
