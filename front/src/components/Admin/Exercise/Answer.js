import React from 'react';

import TextField from './TextField';
import './styles.scss';

const Answer = ({
  id,
  content,
  correct,
  questionNumber,
  answerNumber,
  changeValue,
  removeAnswer
}) => (
  <div className="admin-exercise__question__answers__answer">
    <fieldset>
      <legend>Réponse {answerNumber}</legend>
      {
        answerNumber > 1 && (
          <button type="button" onClick={removeAnswer}>Supprimer
            <span className="sr-only">Question {questionNumber}</span>
          </button>
        )
      }
      <TextField
        className="admin-exercise__question__general-info__field-group"
        id={`exercise-q${questionNumber}-r${answerNumber}-content`}
        label="Contenu"
        type="text"
        autocomplete="off"
        name="content"
        value={content}
        changeValue={changeValue}
      />

      <div className="admin-exercise__question__answers__answer__field-group">
        <input
          type="checkbox"
          id={`exercise-q${questionNumber}-r${answerNumber}-iscorrect`}
          onChange={(evt) => { changeValue(evt.target.checked, 'correct') }}
          name="correct"
        />
        <label htmlFor={`exercise-q${questionNumber}-r${answerNumber}-iscorrect`}>Bonne réponse</label>
      </div>
    </fieldset>
  </div>
);

export default Answer;
