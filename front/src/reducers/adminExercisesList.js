import {
  SET_EXERCISES_LIST_LOADER,
  SET_EXERCISES,
  DELETE_EXERCISE,
} from 'src/actions/adminExercisesList';

const initialState = {
  exercises: [],
  loadingExercisesList: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_EXERCISES:
      return {
        ...state,
        exercises: action.exercises,
      };
    case SET_EXERCISES_LIST_LOADER:
      return {
        ...state,
        loadingExercisesList: action.loading,
      };
    case DELETE_EXERCISE:
      return {
        ...state,
        exercises: {
          ...state.exercises,
          rows: state.exercises.rows.filter((exercise) => exercise.id !== action.idExercise),
        },
      };
    default:
      return state;
  }
};

export default reducer;
