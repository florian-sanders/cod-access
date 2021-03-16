import React from 'react';
import PropTypes from 'prop-types';
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
}) => {
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
          value={newEmail}
          label="Adresse e-mail (nom@domaine.fr)"
          name="newEmail"
          placeholder={user.email}
          onChange={changeField}
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
          value={newPseudo}
          label="Pseudo"
          name="newPseudo"
          placeholder={user.pseudo}
          onChange={changeField}
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
          value={currentPassword}
          label="Mot de passe actuel"
          name="currentPassword"
          onChange={changeField}
        />
        <FieldGroup
          type="password"
          id="newPassword"
          value={newPassword}
          label="Nouveau mot de passe"
          name="newPassword"
          onChange={changeField}
        />
        <FieldGroup
          type="password"
          id="newPasswordConfirm"
          value={newPasswordConfirm}
          label="Confirmez votre nouveau mot de passe"
          name="newPasswordConfirm"
          onChange={changeField}
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
      <button className="button--blue" type="button" onClick={deleteAccount}>Supprimer mon compte</button>
    </section>
  );
};

Settings.propTypes = {
  user: PropTypes.shape({
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  newEmail: PropTypes.string.isRequired,
  newPseudo: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  newPasswordConfirm: PropTypes.string.isRequired,
  currentPassword: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  onSubmitPseudo: PropTypes.func.isRequired,
  onSubmitEmail: PropTypes.func.isRequired,
  onSubmitPassword: PropTypes.func.isRequired,
  onSubmitFile: PropTypes.func.isRequired,
  setSelectedFile: PropTypes.func.isRequired,
  selectedFile: PropTypes.object,
  deleteAccount: PropTypes.func.isRequired,
};

Settings.defaultProps = {
  selectedFile: {},
};

export default Settings;
