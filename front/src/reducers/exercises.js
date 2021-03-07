import {
  SET_THEMES_EXERCISES,
  SET_EXERCISESPAGE_LOADING,
  TOGGLE_FILTER_THEME_VISIBILITY,
  SET_CURRENT_EXERCISE,
  SET_NEW_USER_ANSWER,
  REMOVE_USER_ANSWER,
  SHOW_QUESTION,
} from 'src/actions/exercises';

const initialState = {
  allThemesExercises: [],
  loadingExercisesPage: false,
  themeFilterVisibility: false,
  currentExercise: {
    loading: true,
    title: '',
    brief: '',
    themes: [],
    questions: [],
    userAnswers: [],
    currentQuestionIndex: 0,
  },
  userAnswers: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_THEMES_EXERCISES:
      return {
        ...state,
        allThemesExercises: action.data,
      };
    case SET_EXERCISESPAGE_LOADING:
      return {
        ...state,
        loadingExercisesPage: action.loadingExercisesPage,
      };
    case TOGGLE_FILTER_THEME_VISIBILITY:
      return {
        ...state,
        themeFilterVisibility: !state.themeFilterVisibility,
      };
    case SET_CURRENT_EXERCISE:
      return {
        ...state,
        currentExercise: {
          ...state.currentExercise,
          ...action.currentExercise,
        },
      };
    case SET_NEW_USER_ANSWER:
      return {
        ...state,
        currentExercise: {
          ...state.currentExercise,
          questions: state.currentExercise.questions.map(
            (question) => (
              question.id === action.questionId
                ? {
                  ...question,
                  userAnswers: [
                    ...action.previousAnswers,
                    action.answerId,
                  ],
                }
                : question
            ),
          ),
        },
      };
    case REMOVE_USER_ANSWER:
      return {
        ...state,
        currentExercise: {
          ...state.currentExercise,
          questions: state.currentExercise.questions.map(
            (question) => (
              question.id === action.questionId
                ? {
                  ...question,
                  userAnswers: action.previousAnswers.filter(
                    (answerId) => answerId !== action.answerId,
                  ),
                }
                : question
            ),
          ),
        },
      };
    case SHOW_QUESTION:
      return {
        ...state,
        currentExercise: {
          ...state.currentExercise,
          currentQuestionIndex: action.questionIndex,
        },
      };
    default:
      return state;
  }
};

export default reducer;
