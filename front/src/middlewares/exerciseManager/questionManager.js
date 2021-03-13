import {
  POST_QUESTION_MANAGER,
  PATCH_QUESTION_MANAGER,
  DELETE_QUESTION_MANAGER,
  setQuestionManagerIsSaved,
  setQuestionManagerLoading,
  setQuestionManagerUpdateLoading,
  setQuestionManagerError,
  setQuestionManager,
} from 'src/actions/exerciseManager/questionManager';

import {
  unsetAnswerManager,
} from 'src/actions/exerciseManager/answerManager';

import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case POST_QUESTION_MANAGER:
      try {
        const {
          exerciseManager: { id },
        } = store.getState();
        const { status, data } = await axiosInstance.post(`/admin/exercises/new_question/${id}`, {
          brief: '',
          code: '',
          explanation: '',
        });

        if (status !== 200) {
          throw new Error();
        }

        store.dispatch(setQuestionManager({
          id: data.id,
          brief: data.brief,
          code: data.code,
          explanation: data.explanation,
        }));

        store.dispatch(setQuestionManagerIsSaved(true));
      }
      catch (err) {
        console.log(err);
        store.dispatch(setQuestionManagerError(true));
      }
      finally {
        store.dispatch(setQuestionManagerLoading(false));
      }
      return next(action);
    case PATCH_QUESTION_MANAGER:
      try {
        store.dispatch(setQuestionManagerUpdateLoading(true));
        const {
          questionManager: {
            questions,
          },
        } = store.getState();

        const thisQuestion = questions.find((question) => question.id === action.questionId);

        const { status } = await axiosInstance.patch(`/admin/exercises/new_question/${action.questionId}`, {
          title: thisQuestion.title,
          brief: thisQuestion.brief,
          code: thisQuestion.code,
          published: thisQuestion.published,
          explanation: thisQuestion.explanation,
        });

        if (status !== 200) {
          throw new Error();
        }

        store.dispatch(setQuestionManagerIsSaved(true));
      }
      catch (err) {
        console.log(err);
        //store.dispatch(setQuestionManagerError(true));
      }
      finally {
        store.dispatch(setQuestionManagerUpdateLoading(false));
      }
      return next(action);
    case DELETE_QUESTION_MANAGER:
      try {
        store.dispatch(setQuestionManagerUpdateLoading(true));
        const {
          answerManager: {
            possibleAnswers,
          },
        } = store.getState();

        const relatedAnswers = possibleAnswers.filter(
          (answer) => answer.questionId === action.questionId,
        );

        relatedAnswers.forEach((answer) => {
          store.dispatch(unsetAnswerManager(answer.id));
        });

        const { status: statusQuestion } = await axiosInstance.delete(`/admin/exercises/new_question/${action.questionId}`);

        if (statusQuestion !== 200) {
          throw new Error('question delete fail');
        }

        store.dispatch(setQuestionManagerIsSaved(true));
      }
      catch (err) {
        console.log(err);
        //store.dispatch(setQuestionManagerError(true));
      }
      finally {
        store.dispatch(setQuestionManagerUpdateLoading(false));
      }
      return next(action);
    default:
      return next(action);
  }
};
