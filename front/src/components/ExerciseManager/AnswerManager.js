import React from 'react';

import TextField from './TextField';
import CheckboxRadio from './CheckboxRadio';
import './styles.scss';

const Answer = ({
  loading,
  updateLoading,
  error,
  id,
  content,
  correct,
  questionNumber,
  answerNumber,
  changeValue,
  removeAnswer,
  saveOnBlur,
  isSaved,
}) => (
  <div className="admin-exercise__question__answers__answer">
    <fieldset>
      <legend>Réponse {answerNumber}</legend>
      <button type="button" onClick={removeAnswer}>
        Supprimer
          <span className="sr-only">Question {questionNumber}</span>
      </button>
      <TextField
        className="admin-exercise__question__general-info__field-group"
        id={`exercise-q${questionNumber}-r${answerNumber}-content`}
        label="Contenu"
        type="text"
        autocomplete="off"
        name="content"
        value={content}
        changeValue={changeValue}
        isSaved={isSaved}
        saveOnBlur={saveOnBlur}
        updateLoading={updateLoading}
      />

      <CheckboxRadio
        className="admin-exercise__question__general-info__field-group"
        id={`exercise-q${questionNumber}-r${answerNumber}-correct`}
        label="Bonne réponse"
        type="checkbox"
        name="correct"
        value={correct}
        changeValue={changeValue}
        isSaved={isSaved}
        saveOnBlur={saveOnBlur}
      />
      {
        updateLoading && (
          <p>Sauvegarde en cours</p>
        )
      }
    </fieldset>
  </div>
);

export default Answer;
