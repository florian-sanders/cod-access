import React from 'react';
import PropTypes from 'prop-types';

import Message from 'src/containers/Message';
import ModalConfirm from 'src/containers/ModalConfirm';

import { returnFileSize } from 'src/utils';
import FieldGroup from './FieldGroup';
import './styles.scss';

const Settings = ({
  user,
  newEmail,
  newPseudo,
  currentPassword,
  newPassword,
  newPasswordConfirm,
  changeField,
  onSubmitEmail,
  onSubmitPseudo,
  onSubmitPassword,
  onSubmitFile,
  setSelectedFile,
  selectedFile,
  deleteAccount,
  messageParams,
  displayModalConfirm,
  modalConfirmParams,
  validateEmail,
  testPasswordStrength,
  comparePasswordConfirm,
  checkEmptyField,
}) => {
  const handleDelAccountClick = () => {
    displayModalConfirm({
      heading: 'Suppression de compte',
      message: `Souhaitez-vous réellement supprimer votre compte ? Cette action est irreversible.`,
      confirmParams: {
        onConfirm: deleteAccount,
        label: 'Supprimer mon compte',
      },
      cancelParams: {
        onCancel: () => { },
        label: 'Annuler',
      },
      shouldDisplayHeading: true,
      isVisible: true,
    });
  };
  const handleSubmitEmail = (evt) => {
    evt.preventDefault();
    onSubmitEmail();
  };
  const handleSubmitPseudo = (evt) => {
    evt.preventDefault();
    onSubmitPseudo();
  };
  const handleSubmitPassword = (evt) => {
    evt.preventDefault();
    onSubmitPassword();
  };
  const onChangeFile = (evt) => {
    setSelectedFile(evt.target.files[0]);
  };
  const handleSubmitFile = (evt) => {
    evt.preventDefault();
    onSubmitFile();
  };

  return (
    <section className="settings">
      <h1 className="title_h1">Paramètres</h1>
      {
        messageParams.isVisible
        && messageParams.componentToDisplayIn === 'Settings'
        && (
          <Message {...messageParams} />
        )
      }
      <h2>Modifier la photo de profil</h2>
      <form
        className="settings__form__upload"
        onSubmit={handleSubmitFile}
      >
        <label className="settings__form__upload__label" htmlFor="upload">Télécharger une image</label>
        <input className="settings__form__upload__input" id="upload" type="file" onChange={onChangeFile} accept="image/*" />
        <div className="settings__form__upload__preview">
          {
            selectedFile === null
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

                </>
              )
          }
        </div>
        <button
          className="button--blue"
          type="submit"
        >
          Valider la modification
        </button>
      </form>
      <form
        className="settings__form"
        onSubmit={handleSubmitEmail}
      >
        <FieldGroup
          type="email"
          id="newEmail"
          isMandatory
          message={newEmail.controlMessage}
          value={newEmail.value}
          label="Adresse e-mail (nom@domaine.fr)"
          name="newEmail"
          placeholder={user.email}
          onChange={changeField}
          validateInput={validateEmail}
          checkEmptyField={checkEmptyField}
        />
        <div className="">
          <button
            className="button--blue"
            type="submit"
          >
            Valider la modification
          </button>
        </div>
      </form>
      <form
        className="settings__form"
        onSubmit={handleSubmitPseudo}
      >
        <FieldGroup
          type="text"
          id="newPseudo"
          isMandatory
          message={newPseudo.controlMessage}
          value={newPseudo.value}
          label="Pseudo"
          name="newPseudo"
          placeholder={user.pseudo}
          onChange={changeField}
          checkEmptyField={checkEmptyField}
        />
        <div className="">
          <button
            className="button--blue"
            type="submit"
          >
            Valider la modification
          </button>
        </div>
      </form>
      <form
        className="settings__form"
        onSubmit={handleSubmitPassword}
      >
        <FieldGroup
          type="password"
          id="currentPassword"
          isMandatory
          message={currentPassword.controlMessage}
          value={currentPassword.value}
          label="Mot de passe actuel"
          name="currentPassword"
          onChange={changeField}
          validateInput={validateEmail}
          checkEmptyField={checkEmptyField}
        />
        <FieldGroup
          type="password"
          id="newPassword"
          isMandatory
          message={newPassword.controlMessage}
          value={newPassword.value}
          label="Nouveau mot de passe"
          name="newPassword"
          onChange={changeField}
          validateInput={testPasswordStrength}
          checkEmptyField={checkEmptyField}
        />
        <FieldGroup
          type="password"
          id="newPasswordConfirm"
          isMandatory
          value={newPasswordConfirm.value}
          message={newPasswordConfirm.controlMessage}
          label="Confirmez votre nouveau mot de passe"
          name="newPasswordConfirm"
          currentPassword={currentPassword.value}
          onChange={changeField}
          validateInput={comparePasswordConfirm}
          checkEmptyField={checkEmptyField}
        />
        <div className="">
          <button
            className="button--blue"
            type="submit"
          >
            Valider la modification
          </button>
        </div>
      </form>
      <button className="button--blue" type="button" onClick={handleDelAccountClick}>Supprimer mon compte</button>
      {
        modalConfirmParams.isVisible && (
          <ModalConfirm {...modalConfirmParams} />
        )
      }
    </section>
  );
};

Settings.propTypes = {
  user: PropTypes.shape({
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  newEmail: PropTypes.shape({
    value: PropTypes.string.isRequired,
    controlMessage: PropTypes.string.isRequired,
  }).isRequired,
  newPseudo: PropTypes.shape({
    value: PropTypes.string.isRequired,
    controlMessage: PropTypes.string.isRequired,
  }).isRequired,
  newPassword: PropTypes.shape({
    value: PropTypes.string.isRequired,
    controlMessage: PropTypes.string.isRequired,
  }).isRequired,
  newPasswordConfirm: PropTypes.shape({
    value: PropTypes.string.isRequired,
    controlMessage: PropTypes.string.isRequired,
  }).isRequired,
  currentPassword: PropTypes.shape({
    value: PropTypes.string.isRequired,
    controlMessage: PropTypes.string.isRequired,
  }).isRequired,
  changeField: PropTypes.func.isRequired,
  onSubmitPseudo: PropTypes.func.isRequired,
  onSubmitEmail: PropTypes.func.isRequired,
  onSubmitPassword: PropTypes.func.isRequired,
  onSubmitFile: PropTypes.func.isRequired,
  setSelectedFile: PropTypes.func.isRequired,
  selectedFile: PropTypes.object,
  deleteAccount: PropTypes.func.isRequired,
  validateEmail: PropTypes.func.isRequired,
  testPasswordStrength: PropTypes.func.isRequired,
  comparePasswordConfirm: PropTypes.func.isRequired,
  checkEmptyField: PropTypes.func.isRequired,
};

Settings.defaultProps = {
  selectedFile: {},
};

export default Settings;
