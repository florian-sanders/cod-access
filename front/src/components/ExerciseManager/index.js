import React from 'react';

import Question from 'src/containers/ExerciseManager/QuestionManager';
import TextField from './TextField';
import ThemeCheckbox from './ThemeCheckbox';
import './styles.scss';

const Exercise = ({
  loading,
  getThemes,
  changeValue,
  title,
  brief,
  questions,
  themes,
  handleCheckbox,
  addQuestion,
  save,
  publish,
}) => {
  const handleSaveSubmit = (evt) => {
    evt.preventDefault();
    console.log('yo');
    save();
  };

  const handlePublishSubmit = (evt) => {
    evt.preventDefault();
    publish();
  };

  if (loading) {
    return (<p>Chargement en cours</p>);
  }

  return (
    <section className="admin-exercise">
      <h1 className="admin-exercise__heading-page">Créer un exercice</h1>
      <form>
        <section>
          <article className="admin-exercise__general-info">
            <TextField
              className="admin-exercise__general-info__field-group"
              id="exercise-title"
              label="Titre"
              type="text"
              autocomplete="off"
              name="title"
              value={title}
              changeValue={changeValue}
            />

            <TextField
              className="admin-exercise__general-info__field-group"
              id="exercise-intro"
              label="Intro"
              type="textarea"
              autocomplete="off"
              name="brief"
              value={brief}
              changeValue={changeValue}
            />

            <fieldset className="admin-exercise__general-info__themes">
              <legend>Thématiques</legend>
              {
                themes.map((theme) => (
                  <ThemeCheckbox
                    className="admin-exercise__general-info__field-group"
                    theme={theme}
                    type="checkbox"
                    name="theme"
                    handleCheckbox={handleCheckbox}
                    key={theme.id}
                  />
                ))
              }
            </fieldset>
          </article>

          {
            questions.map((question, index) => (
              <Question id={question.id} questionNumber={index + 1} key={question.id} />
            ))
          }

          <button
            className="admin-exercise__btn-add"
            type="button"
            onClick={addQuestion}
          >
            Ajouter une question supplémentaire
          </button>
        </section>
        <section className="admin-exercise__submit-publish">
          <button type="button">Annuler</button>
          <button type="submit" onClick={handleSaveSubmit}>Sauvegarder (en brouillon)</button>
          <button type="submit" onClick={handlePublishSubmit}>Publier (en ligne)</button>
        </section>
      </form>
    </section>
  )
};

export default Exercise;
