import { connect } from 'react-redux';
import QuestionManager from 'src/components/ExerciseManager/QuestionManager';

import {
  patchQuestionManager,
  setQuestionManagerFieldValue,
  deleteQuestionManager,
  uploadQuestionManagerImage,
  setQuestionManagerSelectedFile,
  patchQuestionManagerImageAlt,
  deleteQuestionManagerImage,
} from 'src/actions/exerciseManager/questionManager';

import { postAnswerManager } from 'src/actions/exerciseManager/answerManager';

const mapStateToProps = ({
  questionManager: {
    questions,
    loading,
    error,
    updateLoading,
    isSaved,
  },
  answerManager: { possibleAnswers },
}, { id }) => {
  const thisQuestion = questions.find((question) => question.id === id);

  return {
    updateLoading,
    error,
    loading,
    isSaved,
    brief: thisQuestion.brief,
    code: thisQuestion.code,
    explanation: thisQuestion.explanation,
    imageId: thisQuestion.imageId,
    imageAlternative: thisQuestion.imageAlternative,
    imagePath: thisQuestion.imagePath,
    possibleAnswers: possibleAnswers.filter((answer) => answer.questionId === thisQuestion.id),
    selectedFile: thisQuestion.selectedFile,
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  changeValue: ({ value, name }) => dispatch(setQuestionManagerFieldValue({
    value,
    name,
    questionId: id,
  })),
  removeQuestion: () => dispatch(deleteQuestionManager(id)),
  createAnswer: () => dispatch(postAnswerManager(id)),
  saveOnBlur: () => dispatch(patchQuestionManager(id)),
  saveAltOnBlur: (imageId) => dispatch(patchQuestionManagerImageAlt(imageId)),
  sendImageFile: (fileInfo) => dispatch(uploadQuestionManagerImage(fileInfo)),
  changeSelectedFile: (file) => dispatch(setQuestionManagerSelectedFile({
    questionId: id,
    file,
  })),
  deleteImage: ({ questionId, imageId }) => dispatch(
    deleteQuestionManagerImage({ questionId, imageId }),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionManager);
