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
  const button = isDone ? "hidden" : "button--primary"
  return (
    <>
      <div className="container wave-double-bottom">
        <form action="" method="get" className="form-new-password" onSubmit={handleSubmit}>
        <label className="form-label">
        Vous êtes sur la page de réinitialisation de mot de passe.Veuillez saisir un nouveau mot de passe ainsi que la confirmation.
        </label>
          <input
            type="password"
            value={password.value}
            onChange={(e) => {
              const textPassword = e.target.value;
              onChangeTextPass(textPassword, passwordConfirm.value);
            }}
            className="form-input"
            placeholder="Veuillez saisir un mot de passe"
            aria-required="true"
            onBlur={(evt) => handleOnBlur(evt.target.value)}
          />
          <input
            type="password"
            value={passwordConfirm.value}
            onChange={(e) => {
              const textPasswordConfirm = e.target.value;
              onChangeTextPass(password.value, textPasswordConfirm);
            }}
            className="form-input"
            placeholder="Veuillez confirmer le mot de passe"
            aria-required="true"
            onBlur={(evt) => handleOnBlur(evt.target.value)}
          />
          {
        password.controlMessage && (
          <p className="message--warning">{password.controlMessage}</p>
        )
      }
          {
        passwordConfirm.controlMessage && (
          <p className="message--warning">{passwordConfirm.controlMessage}</p>
        )
      }
         {
          isDone
            && (
              <>
                <div role="alert" className="message-box confirm">
                  <p className="messsage-box__content confirm__content">Votre mot de passe a bien été mit a jour vous allez recevoir un email de confirmation. Merci de cliquer sur ce lien pour être redirigé: </p>
                </div>
                <Link to="/" className="link">Accueil</Link>
              </>
            )
        }
          <button className={button} type="submit">
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
