import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Proptypes from 'prop-types';

import './styles.scss';

const NewPassword = ({
  validNewPassword,
  onChangeTextPass,
  password,
  passwordConfirm,
  setPasswordControlMessage,
  validatePassword,
  compareNewPasswordConfirm,
  loading,
  isDone,
}) => {
  const { token } = useParams();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newToken = token.replace(/\$/g, '.');
    validNewPassword(newToken);
  };
  const handleOnBlur = (valueToTest) => {
    if (!valueToTest) {
      setPasswordControlMessage({
        name: 'password',
        message: password.controlMessage,
        value: password.value,
      });
    }
    if (valueToTest) {
      compareNewPasswordConfirm({
        message: password.controlMessage,
        value: password.value,
        value2: passwordConfirm.value,
      });
      validatePassword({
        message: password.controlMessage,
        value: password.value,
      });
    }
  };
  return (
    <>
      <div className="container">
        {
          isDone
            ? (
              <>
                <p className="container__text">Votre mot de passe a bien été mit a jour vous allez recevoir un email de confirmation. Merci de cliquer sur ce lien pour être redirigé: </p>
                <Link to="/" className="container__text">Accueil</Link>
              </>
            )
            : (
              <>
                <p className="container__text">Vous êtes sur la page de réinitialisation de mot de passe. </p>
                <p className="container__text"> Veuillez saisir un nouveau mot de passe ainsi que la confirmation.</p>
              </>
            )
        }

        <form action="" method="get" className="form-new-password" onSubmit={handleSubmit}>
          <input
            type="text"
            value={password.value}
            onChange={(e) => {
              const textPassword = e.target.value;
              onChangeTextPass(textPassword, passwordConfirm.value);
            }}
            className="form-new-password__input-password"
            placeholder="Veuillez saisir un mot de passe"
            aria-required="true"
            onBlur={(evt) => handleOnBlur(evt.target.value)}
          />
          <input
            type="text"
            value={passwordConfirm.value}
            onChange={(e) => {
              const textPasswordConfirm = e.target.value;
              onChangeTextPass(password.value, textPasswordConfirm);
            }}
            className="form-new-password__input-password"
            placeholder="Veuillez confirmer le mot de passe"
            aria-required="true"
            onBlur={(evt) => handleOnBlur(evt.target.value)}
          />
          {
        password.controlMessage && (
          <p>{password.controlMessage}</p>
        )
      }
          {
        passwordConfirm.controlMessage && (
          <p>{passwordConfirm.controlMessage}</p>
        )
      }
          <button className="form-new-password__btn-password" type="submit">
            {loading ? 'chargement' : 'Valider'}
          </button>
        </form>
      </div>
    </>
  );
};

NewPassword.propTypes = {
  validNewPassword: Proptypes.func.isRequired,
  onChangeTextPass: Proptypes.func.isRequired,
  password: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  passwordConfirm: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  isDone: Proptypes.bool.isRequired,
  loading: Proptypes.bool,
  setPasswordControlMessage: Proptypes.func.isRequired,
  validatePassword: Proptypes.func.isRequired,
  compareNewPasswordConfirm: Proptypes.func.isRequired,
};
NewPassword.defaultProps = {
  loading: false,
};

export default NewPassword;
