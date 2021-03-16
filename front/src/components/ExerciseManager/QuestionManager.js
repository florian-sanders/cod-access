import React from 'react';
import PropTypes from 'prop-types';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import AnswerManager from 'src/containers/ExerciseManager/AnswerManager';
import { returnFileSize } from 'src/utils';
import TextField from './TextField';
import './styles.scss';

const QuestionManager = ({
  id,
  brief,
  code,
  explanation,
  selectedFile,
  imageAlternative,
  possibleAnswers,
  questionNumber,
  changeValue,
  removeQuestion,
  createAnswer,
  saveOnBlur,
  isSaved,
  sendImageFile,
  changeSelectedFile,
  saveAltOnBlur,
  imageId,
  imagePath,
  deleteImage,
}) => {
  const handleImageChange = (evt) => {
    evt.preventDefault();
    changeSelectedFile(evt.target.files[0]);
  };

  const handleImageOnBlur = () => {
    if (selectedFile && !isSaved) {
      sendImageFile({
        questionId: id,
        file: selectedFile,
      });
    }
  };

  const handleImageAltOnBlur = () => {
    if (!isSaved) saveAltOnBlur(imageId);
  };

  const handleDeleteImage = () => {
    deleteImage({
      imageId,
      questionId: id,
    });
  };

  return (
    <article className="admin-exercise__question">
      <fieldset>
        <legend>
          <h2 className="admin-exercise__question__heading">Question {questionNumber}</h2>
        </legend>
        <button type="button" onClick={removeQuestion}>
          Supprimer
        <span className="sr-only">Question {questionNumber}</span>
        </button>
        <div className="admin-exercise__question__general-info">
          <label>Brief</label>
          <CKEditor
            editor={ClassicEditor}
            data={brief}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              changeValue({
                value: data,
                name: 'brief',
              });
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
              if (!isSaved) {
                saveOnBlur({
                  name: 'brief',
                  value: brief,
                });
              }
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
          {
            imagePath && (
              <>
                <p>Image actuelle :</p>
                <img src={`${process.env.IMAGE}${imagePath}`} alt="" />
                <button onClick={handleDeleteImage} type="button">Supprimer l'image</button>
              </>
            )
          }
          <label
            className="admin-exercise__question__general-info__upload__label"
            htmlFor={`exercise-q${questionNumber}-upload`}
          >
            Télécharger une image
          </label>
          <input
            className="admin-exercise__question__general-info__upload__input"
            id={`exercise-q${questionNumber}-upload`}
            type="file"
            onChange={handleImageChange}
            value=""
            accept="image/*"
            onBlur={handleImageOnBlur}
          />

          <div className="admin-exercise__question__general-info__upload__preview">
            {
              !selectedFile
                ? (
                  <p>Aucun fichier selectionné</p>
                )
                : (
                  <>
                    <p>Nom : {selectedFile.name}</p>
                    <p>Taille : {returnFileSize(selectedFile.size)}</p>
                    {
                      selectedFile.type.substring(0, 5) === 'image'
                        ? <p>Format : {selectedFile.type}, {selectedFile.type.substring(0, 5)}</p>
                        : <p>Le document sélectionné n'est pas une image, veuillez réessayer.</p>
                    }
                    <img src={window.URL.createObjectURL(selectedFile)} alt="" />
                    <TextField
                      className="admin-exercise__question__general-info__field-group"
                      id={`exercise-q${questionNumber}-alternative`}
                      label="Alternative de l'image (attribut alt)"
                      type="text"
                      autocomplete="off"
                      name="imageAlternative"
                      value={imageAlternative}
                      changeValue={changeValue}
                      isSaved={isSaved}
                      saveOnBlur={handleImageAltOnBlur}
                    />
                  </>
                )
            }
          </div>

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

        <label>Explication de la correction</label>
          <CKEditor
            editor={ClassicEditor}
            data={explanation}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              changeValue({
                value: data,
                name: 'explanation',
              });
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
              if (!isSaved) {
                saveOnBlur({
                  name: 'explanation',
                  value: explanation,
                });
              }
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
        </fieldset>
      </fieldset>
    </article>
  );
};

QuestionManager.propTypes = {
  id: PropTypes.number.isRequired,
  brief: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  // picturePath: PropTypes.string.isRequired,
  possibleAnswers: PropTypes.array.isRequired,
  questionNumber: PropTypes.number.isRequired,
  changeValue: PropTypes.func.isRequired,
  removeQuestion: PropTypes.func.isRequired,
  createAnswer: PropTypes.func.isRequired,
  saveOnBlur: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
};

export default QuestionManager;
