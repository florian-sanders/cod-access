export const SET_QUESTION_MANAGER_FIELD_VALUE = 'SET_QUESTION_MANAGER_FIELD_VALUE';

export const setQuestionManagerFieldValue = ({ value, name, questionId }) => ({
  type: SET_QUESTION_MANAGER_FIELD_VALUE,
  value,
  name,
  questionId,
});

export const CREATE_QUESTION = 'CREATE_QUESTION';

export const createQuestion = () => ({
  type: CREATE_QUESTION,
});

export const DELETE_QUESTION = 'DELETE_QUESTION';

export const deleteQuestion = (id) => ({
  type: DELETE_QUESTION,
  questionId: id,
});
