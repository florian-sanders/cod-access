import {
  POST_QUESTION_MANAGER,
  PATCH_QUESTION_MANAGER,
  DELETE_QUESTION_MANAGER,
  UPLOAD_QUESTION_MANAGER_IMAGE,
  PATCH_QUESTION_MANAGER_IMAGE_ALT,
  DELETE_QUESTION_MANAGER_IMAGE,
  setQuestionManagerIsSaved,
  setQuestionManagerLoading,
  setQuestionManagerUpdateLoading,
  setQuestionManagerError,
  setQuestionManager,
  setQuestionManagerImageId,
  resetQuestionManagerImage,
} from 'src/actions/exerciseManager/questionManager';
import {
  unsetAnswerManager,
} from 'src/actions/exerciseManager/answerManager';
import { setMessage } from 'src/actions/other';

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
          imageAlternative: '',
          selectedFile: null,
          imageId: null,
          imagePath: '',
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
    case UPLOAD_QUESTION_MANAGER_IMAGE:
      try {
        console.log('upload');
        store.dispatch(setQuestionManagerUpdateLoading(true));

        const fileInfo = new FormData();
        fileInfo.append('profile', action.file);
        fileInfo.append('question_id', action.questionId);
        fileInfo.append('alternative', action.alternative);

        if (!action.file) {
          return next(action);
        }

        const response = await axiosInstance.post('/upload_question', fileInfo);

        if (response.status !== 200) {
          throw new Error();
        }
        console.log(response);
        store.dispatch(setQuestionManagerImageId({
          imageId: response.data.pictureId,
          imageAlternative: response.data.pictureAlt,
          imagePath: response.data.picturePath,
          questionId: action.questionId,
        }));
        store.dispatch(setMessage({
          type: 'confirm',
          message: 'L\'image a bien été associée à cette question',
          componentToDisplayIn: `QuestionManager-q${action.questionId}`,
        }));
        store.dispatch(setQuestionManagerIsSaved(true));
      }
      catch (err) {
        console.log(err);
        store.dispatch(setMessage({
          type: 'error',
          message: 'L\'image n\'a pas pu être chargée sur le serveur',
          componentToDisplayIn: `QuestionManager-q${action.questionId}`,
        }));
      }
      finally {
        store.dispatch(setQuestionManagerUpdateLoading(false));
      }
      return next(action);
    case PATCH_QUESTION_MANAGER_IMAGE_ALT:
      try {
        store.dispatch(setQuestionManagerUpdateLoading(true));

        const response = await axiosInstance.patch(`/images/${action.imageId}`);

        if (response.status !== 200) {
          throw new Error('alt update fail');
        }

        store.dispatch(setQuestionManagerIsSaved(true));
      }
      catch (err) {
        console.log(err);
      }
      finally {
        store.dispatch(setQuestionManagerUpdateLoading(false));
      }
      return next(action);
    case DELETE_QUESTION_MANAGER_IMAGE:
      try {
        store.dispatch(setQuestionManagerUpdateLoading(true));
        console.log(action);

        const response = await axiosInstance.delete(`/admin/image/${action.imageId}`);

        if (response.status !== 200) {
          throw new Error('image delete fail');
        }

        store.dispatch(resetQuestionManagerImage({ questionId: action.questionId }));
      }
      catch (err) {
        console.log(err);
      }
      finally {
        store.dispatch(setQuestionManagerUpdateLoading(false));
      }
      return next(action);
    default:
      return next(action);
  }
};
