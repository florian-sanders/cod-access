import {
  FETCH_THEMES_EXERCISES,
  FETCH_EXERCISE,
  SEND_ANSWERS,
  setThemesExercises,
  setExercisesPageLoading,
  setAllThemesFilterCheckbox,
  setAllThemesIdToDisplay,
  setCurrentExercise,
  setResults,
} from 'src/actions/exercises';
import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_THEMES_EXERCISES:
      try {
        store.dispatch(setExercisesPageLoading(true));
        const response = await axiosInstance.get('/themes_exercises');
        if (response.status !== 200) {
          throw new Error();
        }
        const ThemesFilterCheckbox = response.data.map((themeWithExercices) => (
          {
            id: themeWithExercices.id,
            name: themeWithExercices.name,
            color: themeWithExercices.color,
            checked: false,
          }));

        const themesIdToDisplay = response.data.map(
          (themeWithExercices) => (themeWithExercices.id),
        );

        store.dispatch(setAllThemesIdToDisplay(themesIdToDisplay));
        store.dispatch(setAllThemesFilterCheckbox(ThemesFilterCheckbox));
        store.dispatch(setThemesExercises(response.data));
      }
      catch (err) {
        console.log('error', err);
      }
      finally {
        store.dispatch(setExercisesPageLoading(false));
      }
      return next(action);
    case FETCH_EXERCISE:
      try {
        const { status, data } = await axiosInstance.get(`/exercises/dragndrop/${action.exerciseId}`); // sanitize ?

        if (status !== 200) {
          throw new Error();
        }

        const questions = data.questions.map((question) => ({
          id: question.id,
          brief: question.brief,
          slicedCode: question.code.split(/(?:\[\[|\]\])+/),
          possibleAnswers: question.possible_answers,
          userAnswers: [],
          picture: {
            path: question.question_picture.path,
            alternative: question.question_picture.alternative,
          },
        }));

        const currentExercise = {
          loading: false,
          id: data.id,
          title: data.title,
          brief: data.brief,
          themes: data.themes,
          questions,
        };

        store.dispatch(setCurrentExercise(currentExercise));
      }
      catch (err) {
        console.log('error', err);
      }
      finally {
        store.dispatch(setExercisesPageLoading(false));
      }
      return next(action);
    case SEND_ANSWERS:
      try {
        const {
          exercises: {
            currentExercise,
          },
        } = store.getState();

        const userAnswers = currentExercise.questions.map((question) => ({
          questionId: question.id,
          answers: question.userAnswers,
        }));

        const { status, data } = await axiosInstance.post(`/exercises/dragndrop/${currentExercise.id}`, userAnswers);

        if (status !== 200) {
          throw new Error();
        }

        store.dispatch(setResults({
          explanations: data.explanation,
          correctAnswers: data.correct,
          incorrectAnswers: data.incorrect,
          rightAnswers: data.rightAnswers,
        }));
      }
      catch (err) {
        console.log(err);
      }
      return next(action);
    default:
      return next(action);
  }
};
