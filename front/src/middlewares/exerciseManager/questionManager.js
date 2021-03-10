import {
  POST_QUESTION_MANAGER,
  PATCH_QUESTION_MANAGER,
  setQuestionManagerIsSaved,
  setQuestionManagerLoading,
  setQuestionManagerUpdateLoading,
  setQuestionManagerError,
  setQuestionManager,
} from 'src/actions/exerciseManager/questionManager';

import axiosInstance from 'src/api';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case POST_QUESTION_MANAGER:
      try {
        const {
          exerciseManager: { id },
        } = store.getState();
        const { status, data } = await axiosInstance.post(`/exercises/new_question/${id}`, {
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
          exerciseManager: {
            id,
            title,
            brief,
            published,
          },
        } = store.getState();

        const { status, data } = await axiosInstance.get('/themes', {
          title,
          brief,
          published,
        });

        if (status !== 200) {
          throw new Error();
        }

        console.log(data);

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
