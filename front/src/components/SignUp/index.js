import React from 'react';
import Proptypes from 'prop-types';
import FieldGroup from './FieldGroup';

import './styles.scss';

const SignUp = ({
  changeField,
  email,
  pseudo,
  password,
  passwordConfirm,
  trySignUp,
  loading,
  isSignedUp,
  setControlMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    trySignUp();
  };

  return (
    <div className="signup">
      <h1 className="signup__title">Inscription</h1>
      <div className="signup__content">
        <div className="signup__content__illustration">
          <p>{isSignedUp && 'Merci Votre inscription est presque terminée : vous allez recevoir un e-mail d’ici quelques minutes afin de valider votre adresse email.'}</p>
        </div>
        <form action="" method="get" className="signup__content__form" onSubmit={handleSubmit}>
          <FieldGroup
            type="email"
            id="email"
            value={email.value}
            label="Adresse e-mail (nom@domaine.fr)"
            name="email"
            onChange={changeField}
            isMandatory
            message={email.controlMessage}
            setControlMessage={setControlMessage}
          />
          <FieldGroup
            type="text"
            id="pseudo"
            value={pseudo.value}
            label="Pseudo"
            name="pseudo"
            onChange={changeField}
            isMandatory
            message={pseudo.controlMessage}
            setControlMessage={setControlMessage}
          />
          <FieldGroup
            type="password"
            id="password"
            value={password.value}
            label="Mot de passe"
            name="password"
            onChange={changeField}
            isMandatory
            message={password.controlMessage}
            setControlMessage={setControlMessage}
          />
          <FieldGroup
            type="password"
            id="password_confirm"
            value={passwordConfirm.value}
            label="Confirmez votre mot de passe"
            name="passwordConfirm"
            onChange={changeField}
            isMandatory
            message={passwordConfirm.controlMessage}
            setControlMessage={setControlMessage}
          />
          <div className="signup__content__form__group">
            <button
              className="signup__content__form__submit"
              type="submit"
            >
              {loading ? 'chargement' : 'S\'enregistrer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  email: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  pseudo: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  password: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  passwordConfirm: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  changeField: Proptypes.func.isRequired,
  trySignUp: Proptypes.func.isRequired,
  loading: Proptypes.bool,
  isSignedUp: Proptypes.bool.isRequired,
  setControlMessage: Proptypes.func.isRequired,
};

SignUp.defaultProps = {
  loading: false,
};

export default SignUp;
