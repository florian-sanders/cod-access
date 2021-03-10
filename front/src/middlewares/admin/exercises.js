import {
  FETCH_THEMES,
  SAVE_EXERCISE,
  setThemes,
  setLoading,
} from 'src/actions/admin/exercises';

import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_THEMES:
      try {
        const response = await axiosInstance.get('/themes');

        if (response.status !== 200) {
          throw new Error();
        }
        console.log(response.data);
        store.dispatch(setThemes(response.data));
      }
      catch (err) {
        console.log(err);
      }
      finally {
        store.dispatch(setLoading(false));
      }
      return next(action);
    case SAVE_EXERCISE:
      try {
        const { admin: { newExercise } } = store.getState();
        const exercise = { ...newExercise };

        delete exercise.loading;
        delete exercise.id;
        delete exercise.kind_id;
        
        console.log(exercise);

        const questions = { ...exercise.questions };
        questions.map((question) => ({
          brief: question.brief,
          code: question.code,
          explanation: question.explanation,
        }));
        
        answers.map((answer) => ({
          content: answer.content,
          correct: answer.correct,
        }));

        const response = await axiosInstance.post('/exercises/dragndrop/new');

        if (response.status !== 200) {
          throw new Error();
        }
      }
      catch (err) {
        console.log(err);
      }
      finally {
      }
      return next(action);
    default:
      return next(action);
  }
};
