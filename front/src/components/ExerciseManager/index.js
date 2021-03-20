import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NavigationPrompt from 'react-router-navigation-prompt';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faPen } from '@fortawesome/free-solid-svg-icons';

import Question from 'src/containers/ExerciseManager/QuestionManager';
import ThemeManager from 'src/containers/ExerciseManager/ThemeManager';
import TextField from './TextField';
import Checkbox from './Checkbox';
import Modal from './Modal';
import CircleLoader from '../CircleLoader'
import './styles.scss';

const ExerciseManager = ({
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
  getExercise,
  createNew,
  resetManagerStates,
}) => {
  useEffect(() => {
    if (createNew) {
      createExercise();
    }
    else {
      getExercise();
    }
    return () => {
      resetManagerStates();
    };
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <CircleLoader
          colour="#7ED8F7"
          radius={100}
          duration={2}
          strokeWidth={20}
        />
        <p>Création d'un brouillon d'exercice en cours</p>
      </div>
    );
  }

  return (
    <section className="admin-exercise">
      <NavigationPrompt when={!published}>
        {({ onConfirm }, onCancel) => (
          <Modal
            onConfirm={onConfirm}
            onCancel={onCancel}
            removeExercise={removeExercise}
          />
        )}
      </NavigationPrompt>
      <h1 className="title-h1">Créer un exercice</h1>
      <div className="admin-exercise__status-controls grey">
        <h2 className="title-h2 admin-exercise__status-controls__heading">Statut</h2>
        <p className="admin-exercise__status-controls__visibility">
          <span className="admin-exercise__status-controls__visibility__label">Visibilité&nbsp;: </span>
          {
            published
              ? 'Publié'
              : 'Brouillon'
          }
        </p>
        <Checkbox
          className="admin-exercise__form__general-info__field-group"
          id="exercise-published"
          label="Publié"
          type="checkbox"
          name="published"
          value={published}
          saveCheckboxChange={changeValue}
          updateState={saveOnBlur}
        />
        <div className="admin-exercise__status-controls__status">
          {
            updateLoading && (
              <div className="loading">
                <CircleLoader
                  colour="#7ED8F7"
                  radius={20}
                  duration={2}
                  strokeWidth={5}
                />
                <p className="admin-exercise__status-controls__status__message">Sauvegarde en cours</p>
              </div>
            )
          }
          {
            isSaved && (
              <>
                <FontAwesomeIcon className="admin-exercise__status-controls__status__is-saved" role="presentation" icon={faCheck} size="2x" />
                <p className="admin-exercise__status-controls__status__message">Sauvegardé</p>
              </>
            )
          }
          {
            error && (
              <>
                <FontAwesomeIcon className="admin-exercise__status-controls__status__error" role="presentation" icon={faTimes} size="2x" />
                <p className="admin-exercise__status-controls__status__message">Erreur</p>
              </>
            )
          }
          {
            !isSaved
            && !error
            && !updateLoading
            && (
              <>
                <FontAwesomeIcon className="admin-exercise__status-controls__status__edit" role="presentation" icon={faPen} size="2x" />
                <p className="admin-exercise__status-controls__status__message">Edition en cours</p>
              </>
            )
          }
        </div>
        <button
          className="admin-exercise__form__general-info__button admin-exercise__form__general-info__button--remove-exercise button--delete"
          type="button"
          onClick={removeExercise}
        >
          Supprimer l'exercice
        </button>
      </div>
      <form className="admin-exercise__form grey">
        <section>
          <article className="admin-exercise__form__general-info">
            <TextField
              className="admin-exercise__form__general-info__field-group"
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
            <label className="form-label">Intro</label>
            <div className="admin-exercise__form__general-info__editor">
              <CKEditor
                className="form-input textarea"
                editor={ClassicEditor}
                data={brief}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  changeValue({
                    value: data,
                    name: 'brief',
                  });
                }}
                onBlur={() => {
                  if (!isSaved) {
                    saveOnBlur({
                      name: 'brief',
                      value: brief,
                    });
                  }
                }}
              />
            </div>
            <ThemeManager />
          </article>

          {
            questions.map((question, index) => (
              <Question id={question.id} questionNumber={index + 1} key={question.id} />
            ))
          }

          <button
            className="admin-exercise__form__btn-add button--primary"
            type="button"
            onClick={createQuestion}
          >
            Ajouter une question
          </button>

        </section>
      </form>
    </section >
  );
};

ExerciseManager.propTypes = {
  loading: PropTypes.bool.isRequired,
  updateLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  changeValue: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
  createQuestion: PropTypes.func.isRequired,
  published: PropTypes.bool.isRequired,
  saveOnBlur: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
  createExercise: PropTypes.func.isRequired,
  removeExercise: PropTypes.func.isRequired,
  createNew: PropTypes.bool,
  getExercise: PropTypes.func.isRequired,
  resetManagerStates: PropTypes.func.isRequired,
};

ExerciseManager.defaultProps = {
  createNew: false,
};

export default ExerciseManager;
