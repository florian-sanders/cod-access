import React, { useEffect } from 'react';
import { Prompt } from 'react-router-dom';

import Question from 'src/containers/ExerciseManager/QuestionManager';
import ThemeManager from 'src/containers/ExerciseManager/ThemeManager';
import TextField from './TextField';
import ThemeCheckbox from './ThemeCheckbox';
import Modal from './Modal';
import './styles.scss';

const Exercise = ({
  loading,
  updateLoading,
  error,
  changeValue,
  title,
  brief,
  questions,
  createQuestion,
  published,
  saveOnBlur,
  isSaved,
  createExercise,
  removeExercise,
  isLeaving,
  setIsLeaving,
}) => {
  useEffect(() => {
    createExercise();
    if (!published) {
      window.onbeforeunload = () => true;
    }
    else {
      window.onbeforeunload = undefined;
    }
  }, []);

  if (loading) {
    return (<p>Chargement en cours</p>);
  }

  if (error) {
    return (<p>Il y a eu un problème</p>);
  }

  return (
    <section className="admin-exercise">
      <Prompt
        when={!published}
        message={() => {
          setIsLeaving(true);
        }}
      />
      {
        isLeaving && (
          <Modal />
        )
      }
      <h1 className="admin-exercise__heading-page">Créer un exercice</h1>
      <p>Statut de l'exercice : sauvegardé en brouillon</p>
      <form>
        <section>
          <article className="admin-exercise__general-info">
            <button
              className="admin-exercise__btn-remove"
              type="button"
              onClick={removeExercise}
            >
              Supprimer l'exercice
            </button>
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

            <ThemeManager />
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
      </form>
    </section>
  );
};

export default Exercise;
