import React from 'react';
import PropTypes from 'prop-types';

import AnswerManager from 'src/containers/ExerciseManager/AnswerManager';
import TextField from './TextField';
import './styles.scss';

const QuestionManager = ({
  id,
  brief,
  code,
  explanation,
  picturePath,
  possibleAnswers,
  questionNumber,
  changeValue,
  removeQuestion,
  createAnswer,
  saveOnBlur,
  isSaved,
}) => (
  <article className="admin-exercise__question">
    <fieldset>
      <legend>
        <h2 className="admin-exercise__question__heading">Question {questionNumber}</h2>
      </legend>
      <button type="button" onClick={removeQuestion}>Supprimer
        <span className="sr-only">Question {questionNumber}</span>
      </button>
      <div className="admin-exercise__question__general-info">
        <TextField
          className="admin-exercise__question__general-info__field-group"
          id={`exercise-q${questionNumber}-brief`}
          label="Brief"
          type="textarea"
          autocomplete="off"
          name="brief"
          value={brief}
          changeValue={changeValue}
          isSaved={isSaved}
          saveOnBlur={saveOnBlur}
        />

        <TextField
          className="admin-exercise__question__general-info__field-group"
          id={`exercise-q${questionNumber}-img`}
          label="Image"
          type="file"
          autocomplete="off"
          name="picturePath"
          value=""
          changeValue={changeValue}
          isSaved={isSaved}
          saveOnBlur={saveOnBlur}
        />

        <TextField
          className="admin-exercise__question__general-info__field-group"
          id={`exercise-q${questionNumber}-code`}
          label="Code"
          type="textarea"
          autocomplete="off"
          name="code"
          value={code}
          changeValue={changeValue}
          isSaved={isSaved}
          saveOnBlur={saveOnBlur}
        />
      </div>

      <fieldset className="admin-exercise__question__answers">
        <legend>
          <h3 className="admin-exercise__question__answers__heading">
            <span className="sr-only">Question {questionNumber} -</span> Réponses possibles
          </h3>
        </legend>
        {
          possibleAnswers.map((answer, index) => (
            <AnswerManager
              questionId={id}
              id={answer.id}
              questionNumber={questionNumber}
              answerNumber={index + 1}
              key={answer.id}
            />
          ))
        }

        <button
          className="admin-exercise__question__answers__btn-add"
          type="button"
          onClick={createAnswer}
        >
          Ajouter une réponse supplémentaire
        </button>

        <TextField
          className="admin-exercise__question__general-info__field-group"
          id={`exercise-q${questionNumber}-explanation`}
          label="Explication de la correction"
          type="textarea"
          autocomplete="off"
          name="explanation"
          value={explanation}
          changeValue={changeValue}
          isSaved={isSaved}
          saveOnBlur={saveOnBlur}
        />
      </fieldset>
    </fieldset>
  </article>
);

QuestionManager.propTypes = {
  id: PropTypes.number.isRequired,
  brief: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  picturePath: PropTypes.string.isRequired,
  possibleAnswers: PropTypes.array.isRequired,
  questionNumber: PropTypes.number.isRequired,
  changeValue: PropTypes.func.isRequired,
  removeQuestion: PropTypes.func.isRequired,
  createAnswer: PropTypes.func.isRequired,
  saveOnBlur: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
};

export default QuestionManager;
