export const SET_ANSWER_MANAGER_FIELD_VALUE = 'SET_ANSWER_MANAGER_FIELD_VALUE';

export const setAnswerManagerFieldValue = ({ value, name, answerId, questionId }) => ({
  type: SET_ANSWER_MANAGER_FIELD_VALUE,
  value,
  name,
  questionId,
  answerId,
});

export const CREATE_ANSWER = 'CREATE_ANSWER';

export const createAnswer = (questionId) => ({
  type: CREATE_ANSWER,
  questionId,
});

export const DELETE_ANSWER = 'DELETE_ANSWER';

export const deleteAnswer = (answerId) => ({
  type: DELETE_ANSWER,
  answerId,
});
