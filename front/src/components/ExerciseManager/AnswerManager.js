import React from 'react';

import TextField from './TextField';
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
}) => {
  const handleOnBlur = () => {
    if (!isSaved) {
      saveOnBlur();
    }
  };

  return (
    <div className="admin-exercise__question__answers__answer">
      <fieldset>
        <legend>Réponse {answerNumber}</legend>
        <button type="button" onClick={removeAnswer}>Supprimer
        <span className="sr-only">Question {questionNumber}</span>
          {console.log(isSaved)}
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

        <div className="admin-exercise__question__answers__answer__field-group">
          <input
            type="checkbox"
            id={`exercise-q${questionNumber}-r${answerNumber}-iscorrect`}
            onChange={(evt) => {
              changeValue(evt.target.checked, 'correct');
            }}
            name="correct"
            onBlur={handleOnBlur}
          />
          <label htmlFor={`exercise-q${questionNumber}-r${answerNumber}-iscorrect`}>Bonne réponse</label>
          {
            updateLoading && (
              <p>Sauvegarde en cours</p>
            )
          }
        </div>
      </fieldset>
    </div>
  );
};

export default Answer;
