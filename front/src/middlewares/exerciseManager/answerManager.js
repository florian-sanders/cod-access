import {
  POST_ANSWER_MANAGER,
  PATCH_ANSWER_MANAGER,
  DELETE_ANSWER_MANAGER,
  setAnswerManagerIsSaved,
  setAnswerManagerLoading,
  setAnswerManagerUpdateLoading,
  setAnswerManagerError,
  setAnswerManager,
  unsetAnswerManager,
} from 'src/actions/exerciseManager/answerManager';

import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case POST_ANSWER_MANAGER:
      try {
        const { status, data } = await axiosInstance.post(`/admin/exercises/new_answer/${action.questionId}`, {
          content: '',
          correct: false,
        });

        if (status !== 200) {
          throw new Error();
        }

        store.dispatch(setAnswerManager({
          questionId: action.questionId,
          id: data.id,
          content: data.content,
          correct: data.correct,
        }));

        store.dispatch(setAnswerManagerIsSaved(true));
      }
      catch (err) {
        console.log(err);
        store.dispatch(setAnswerManagerError(true));
      }
      finally {
        store.dispatch(setAnswerManagerLoading(false));
      }
      return next(action);
    case PATCH_ANSWER_MANAGER:
      try {
        store.dispatch(setAnswerManagerUpdateLoading(true));
        const {
          answerManager: {
            possibleAnswers,
          },
        } = store.getState();

        const thisAnswer = possibleAnswers.find((answer) => answer.id === action.answerId);

        const { status } = await axiosInstance.patch(`/admin/exercises/new_answer/${action.answerId}`, {
          content: thisAnswer.content,
          correct: thisAnswer.correct,
        });

        if (status !== 200) {
          throw new Error();
        }

        store.dispatch(setAnswerManagerIsSaved(true));
      }
      catch (err) {
        console.log(err);
        //store.dispatch(setAnswerManagerError(true));
      }
      finally {
        store.dispatch(setAnswerManagerUpdateLoading(false));
      }
      return next(action);
    case DELETE_ANSWER_MANAGER:
      try {
        const { status } = await axiosInstance.delete(`/admin/exercises/new_answer/${action.answerId}`);

        if (status !== 200) {
          throw new Error(`Delete Answer #${action.answerId} fail`);
        }

        store.dispatch(unsetAnswerManager(action.answerId));
        store.dispatch(setAnswerManagerIsSaved(true));
      }
      catch (err) {
        console.log(err);
        store.dispatch(setAnswerManagerError(true));
      }
      finally {
        store.dispatch(setAnswerManagerLoading(false));
      }
      return next(action);
    default:
      return next(action);
  }
};
