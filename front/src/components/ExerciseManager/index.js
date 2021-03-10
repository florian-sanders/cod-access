import React, { useEffect } from 'react';

import Question from 'src/containers/ExerciseManager/QuestionManager';
import TextField from './TextField';
import ThemeCheckbox from './ThemeCheckbox';
import './styles.scss';

const Exercise = ({
  loading,
  updateLoading,
  error,
  getThemes,
  changeValue,
  title,
  brief,
  questions,
  themes,
  handleCheckbox,
  createQuestion,
  publish,
  saveOnBlur,
  isSaved,
  createExercise,
}) => {
  useEffect(() => {
    createExercise();
  }, []);

  if (loading) {
    console.log('ça charge');
    return (<p>Chargement en cours</p>);
  }

  if (error) {
    return (<p>Il y a eu un problème</p>);
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
              isSaved={isSaved}
              saveOnBlur={saveOnBlur}
              updateLoading={updateLoading}
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
              isSaved={isSaved}
              saveOnBlur={saveOnBlur}
              updateLoading={updateLoading}
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
                    saveOnBlur={saveOnBlur}
                    isSaved={isSaved}
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
            onClick={createQuestion}
          >
            Ajouter une question supplémentaire
          </button>
        </section>
        <section className="admin-exercise__submit-publish">
          <button type="button">Annuler</button>
          <button type="submit">Sauvegarder (en brouillon)</button>
          <button type="submit">Publier (en ligne)</button>
        </section>
      </form>
    </section>
  )
};

export default Exercise;
