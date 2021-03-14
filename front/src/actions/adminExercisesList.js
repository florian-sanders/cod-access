export const FETCH_EXERCISES = 'FETCH_EXERCISES';
export const SET_EXERCISES_LIST_LOADER = 'SET_EXERCISES_LIST_LOADER';
export const DELETE_EXERCISE = 'DELETE_EXERCISE';
export const SET_EXERCISES = 'SET_EXERCISES';

export const fetchExercises = ({ page }) => ({
  type: FETCH_EXERCISES,
  page,
});

export const setExercises = (exercises) => ({
  type: SET_EXERCISES,
  exercises,
});

export const setLoadingExercisesList = (loading) => ({
  type: SET_EXERCISES_LIST_LOADER,
  loading,
});

export const deleteExercise = (idExercise) => ({
  type: DELETE_EXERCISE,
  idExercise,
});
