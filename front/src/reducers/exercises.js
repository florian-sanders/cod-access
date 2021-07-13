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
  SET_EXERCISE_RESULTS_LOADING,
} from 'src/actions/exercises';

const initialState = {
  allExercises: [],
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
    resultsLoading: false,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_EXERCISE_RESULTS_LOADING:
      return {
        ...state,
        currentExercise: {
          ...state.currentExercise,
          resultsLoading: action.status,
        },
      };
    case RESET_CURRENT_EXERCISE:
      return {
        ...state,
        currentExercise: { ...initialState.currentExercise },
      };
    case SET_THEMES_EXERCISES:
      return {
        ...state,
        allExercises: action.data,
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
          // display explanation and result
          isCorrected: true,
          questions: state.currentExercise.questions.map(
            (question) => {
              // find the correction of the question
              const thisCorrectedQuestion = action.corrections.find(
                (correctedQuestion) => question.id === correctedQuestion.id,
              );

              // add explanation content so that it can be displayed at the bottom of the page
              question.explanation = thisCorrectedQuestion.explanation;

              // flag each answer of the question as userCorrect or not, rightAnswer or not
              question.possibleAnswers = question.possibleAnswers.map((answer) => {
                // if answer id is in the correction, this answer is one of the right answers
                answer.isRightAnswer = thisCorrectedQuestion.rightAnswers.includes(answer.id);
                // if answer id is in the correct AND has been selected by the user
                // user is correct, this answer is good
                answer.isUserCorrect = thisCorrectedQuestion.rightAnswers.includes(answer.id)
                  && question.userAnswers.includes(answer.id);

                // flag this answer as corrected (makes it not draggable)
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
