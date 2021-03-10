import React from 'react';
import PropTypes from 'prop-types';
import diverImgPath from 'src/assets/img/diver.svg';
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
    console.log(evt.target.files[0]);
    setSelectedFile(evt.target.files[0]);
  };
  const handleSubmitFile = (evt) => {
    evt.preventDefault();
    onSubmitFile();
  };
  console.log('selectedFile', selectedFile);
  return (
    <section className="settings">
      <h1 className="title_h1">Paramètres</h1>
      <form
        className="settings__form"
        onSubmit={handleSubmitFile}
      >
        <div className="">
          <label htmlFor="upload">Modifier votre photo de profil</label>
          <input id="upload" type="file" onChange={onChangeFile} />
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
};

export default Settings;
