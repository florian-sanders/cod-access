export const SET_CREATE_EXERCISE_FIELD_VALUE = 'SET_CREATE_EXERCISE_FIELD_VALUE';

export const setCreateExerciseFieldValue = (value, name) => ({
  type: SET_CREATE_EXERCISE_FIELD_VALUE,
  value,
  name,
});

export const SET_CREATE_QUESTION_FIELD_VALUE = 'SET_CREATE_QUESTION_FIELD_VALUE';

export const setCreateQuestionFieldValue = ({ value, name, questionId }) => ({
  type: SET_CREATE_QUESTION_FIELD_VALUE,
  value,
  name,
  questionId,
});

export const SET_CREATE_ANSWER_FIELD_VALUE = 'SET_CREATE_ANSWER_FIELD_VALUE';

export const setCreateAnswerFieldValue = ({ value, name, answerId, questionId }) => ({
  type: SET_CREATE_ANSWER_FIELD_VALUE,
  value,
  name,
  questionId,
  answerId,
});

export const FETCH_THEMES = 'FETCH_THEMES';

export const fetchThemes = () => ({
  type: FETCH_THEMES,
});

export const SET_THEMES = 'SET_THEMES';

export const setThemes = (themes) => ({
  type: SET_THEMES,
  themes,
});

export const SET_LOADING = 'SET_LOADING';

export const setLoading = (status) => ({
  type: SET_LOADING,
  status,
});

export const TOGGLE_THEME_CHECKED = 'TOGGLE_THEME_CHECKED';

export const toggleThemeChecked = (themeId) => ({
  type: TOGGLE_THEME_CHECKED,
  themeId,
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

export const CREATE_ANSWER = 'CREATE_ANSWER';

export const createAnswer = (id) => ({
  type: CREATE_ANSWER,
  questionId: id,
});

export const DELETE_ANSWER = 'DELETE_ANSWER';

export const deleteAnswer = ({ questionId, answerId }) => ({
  type: DELETE_ANSWER,
  questionId,
  answerId,
});

export const SAVE_EXERCISE = 'SAVE_EXERCISE';

export const saveExercise = () => ({
  type: SAVE_EXERCISE,
});
