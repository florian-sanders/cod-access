import {
  SET_THEMES_EXERCISES,
  SET_EXERCISESPAGE_LOADING,
  TOGGLE_FILTER_THEME_VISIBILITY,
  SET_ALL_THEMES_FILTER_CHECKBOX,
  SET_THEME_CHECKBOX,
  SET_THEMES_ID_TO_DISPLAY,
  SET_ALL_THEMES_ID_TO_DISPLAY,
  SET_CURRENT_EXERCISE,
  SET_NEW_USER_ANSWER,
  REMOVE_USER_ANSWER,
  SHOW_QUESTION,
  SET_RESULTS,
  RESET_CURRENT_EXERCISE,
} from 'src/actions/exercises';

const initialState = {
  allThemesExercises: [],
  loadingExercisesPage: false,
  themeFilterVisibility: false,
  themesFilterCheckbox: [],
  themesIdToDisplay: [],
  currentExercise: {
    loading: true,
    title: '',
    brief: '',
    themes: [],
    questions: [],
    currentQuestionIndex: 0,
    userScore: null,
    isCorrected: false,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_CURRENT_EXERCISE:
      return {
        ...state,
        currentExercise: { ...initialState.currentExercise },
      };
    case SET_THEMES_EXERCISES:
      return {
        ...state,
        allThemesExercises: action.data,
      };
    case SET_EXERCISESPAGE_LOADING:
      return {
        ...state,
        loadingExercisesPage: action.loading,
      };
    case TOGGLE_FILTER_THEME_VISIBILITY:
      return {
        ...state,
        themeFilterVisibility: !state.themeFilterVisibility,
      };
    case SET_ALL_THEMES_FILTER_CHECKBOX:
      return {
        ...state,
        themesFilterCheckbox: action.newThemesFilter,
      };
    case SET_THEME_CHECKBOX:
      return {
        ...state,
        themesFilterCheckbox:
          state.themesFilterCheckbox.map(
            (theme) => (
              theme.id === action.idTheme
                ? {
                  ...theme,
                  checked: !action.checked,
                }
                : theme
            ),
          ),
      };
    case SET_THEMES_ID_TO_DISPLAY:
      return {
        ...state,
        themesIdToDisplay:
          state.themesFilterCheckbox.filter((theme) => theme.checked)
            .map((theme) => theme.id).length === 0
            ? state.themesFilterCheckbox.map((theme) => theme.id)
            : state.themesFilterCheckbox.filter((theme) => theme.checked).map((theme) => theme.id),
      };
    case SET_ALL_THEMES_ID_TO_DISPLAY:
      return {
        ...state,
        themesIdToDisplay: action.themesId,
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
    case SET_RESULTS:
      return {
        ...state,
        currentExercise: {
          ...state.currentExercise,
          currentQuestionIndex: 0,
          userScore: action.userScore,
          isCorrected: true,
          questions: state.currentExercise.questions.map(
            (question) => {
              const { explanation } = action.explanations.find(
                (expl) => question.id === expl.id,
              );
              question.explanation = explanation;
              question.possibleAnswers = question.possibleAnswers.map((answer) => {
                answer.isRightAnswer = action.rightAnswers.includes(answer.id);
                answer.userCorrect = action.rightAnswers.includes(answer.id)
                  && question.userAnswers.includes(answer.id);
                answer.isCorrected = true;
                return answer;
              });

              return question;
            },
          ),
        },
      };
    default:
      return state;
  }
};

export default reducer;
