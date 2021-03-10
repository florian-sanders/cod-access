export const SET_QUESTION_MANAGER_UPDATE_LOADING = 'SET_QUESTION_MANAGER_UPDATE_LOADING';

export const setQuestionManagerUpdateLoading = (status) => ({
  type: SET_QUESTION_MANAGER_UPDATE_LOADING,
  status,
});

export const SET_QUESTION_MANAGER_ERROR = 'SET_QUESTION_MANAGER_ERROR';

export const setQuestionManagerError = (status) => ({
  type: SET_QUESTION_MANAGER_ERROR,
  status,
});

export const SET_QUESTION_MANAGER_LOADING = 'SET_QUESTION_MANAGER_LOADING';

export const setQuestionManagerLoading = (status) => ({
  type: SET_QUESTION_MANAGER_LOADING,
  status,
});

export const SET_QUESTION_MANAGER_IS_SAVED = 'SET_QUESTION_MANAGER_IS_SAVED';

export const setQuestionManagerIsSaved = (status) => ({
  type: SET_QUESTION_MANAGER_IS_SAVED,
  status,
});

export const POST_QUESTION_MANAGER = 'POST_QUESTION_MANAGER';

export const postQuestionManager = () => ({
  type: POST_QUESTION_MANAGER,
});

export const PATCH_QUESTION_MANAGER = 'PATCH_QUESTION_MANAGER';

export const patchQuestionManager = () => ({
  type: PATCH_QUESTION_MANAGER,
});

export const SET_QUESTION_MANAGER_FIELD_VALUE = 'SET_QUESTION_MANAGER_FIELD_VALUE';

export const setQuestionManagerFieldValue = ({ value, name, questionId }) => ({
  type: SET_QUESTION_MANAGER_FIELD_VALUE,
  value,
  name,
  questionId,
});

export const SET_QUESTION_MANAGER = 'SET_QUESTION_MANAGER';

export const setQuestionManager = (question) => ({
  type: SET_QUESTION_MANAGER,
  question,
});

export const DELETE_QUESTION_MANAGER = 'DELETE_QUESTION_MANAGER';

export const deleteQuestionManager = (id) => ({
  type: DELETE_QUESTION_MANAGER,
  questionId: id,
});
