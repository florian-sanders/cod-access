export const FETCH_THEMES_EXERCISES = 'FETCH_THEMES_EXERCISES';

export const fetchThemesExercises = () => ({
  type: FETCH_THEMES_EXERCISES,
});

export const FETCH_EXERCISE = 'FETCH_EXERCISE';

export const fetchExercise = (exerciseId) => ({
  type: FETCH_EXERCISE,
  exerciseId,
});

export const SET_THEMES_EXERCISES = 'SET_THEMES_EXERCISES';

export const setThemesExercises = (data) => ({
  type: SET_THEMES_EXERCISES,
  data,
});

export const SET_CURRENT_EXERCISE = 'SET_CURRENT_EXERCISE';

export const setCurrentExercise = (currentExercise) => ({
  type: SET_CURRENT_EXERCISE,
  currentExercise,
});

export const SET_EXERCISESPAGE_LOADING = 'SET_EXERCISESPAGE_LOADING';

export const setExercisesPageLoading = (loading) => ({
  type: SET_EXERCISESPAGE_LOADING,
  loading,
});

export const TOGGLE_FILTER_THEME_VISIBILITY = 'TOGGLE_FILTER_THEME_VISIBILITY';

export const toogleFilterThemeVisibility = () => ({
  type: TOGGLE_FILTER_THEME_VISIBILITY,
});

export const SET_NEW_USER_ANSWER = 'SET_NEW_USER_ANSWER';

export const setNewUserAnswer = ({ questionId, answerId, previousAnswers }) => ({
  type: SET_NEW_USER_ANSWER,
  questionId,
  answerId,
  previousAnswers,
});

export const REMOVE_USER_ANSWER = 'REMOVE_USER_ANSWER';

export const removeUserAnswer = ({ questionId, answerId, previousAnswers }) => ({
  type: REMOVE_USER_ANSWER,
  questionId,
  answerId,
  previousAnswers,
});

export const SHOW_QUESTION = 'SHOW_QUESTION';

export const showQuestion = (questionIndex) => ({
  type: SHOW_QUESTION,
  questionIndex,
});