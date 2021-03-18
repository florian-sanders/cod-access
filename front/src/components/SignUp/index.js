import React from 'react';
import Proptypes from 'prop-types';
import picture from 'src/assets/img/contact-signup.svg';
import Message from 'src/containers/Message';
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
  validateEmail,
  testPasswordStrength,
  comparePasswordConfirm,
  messageParams,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    trySignUp();
  };

  return (
    <div className="signup">
      <h1 className="title-h1 center">Inscription</h1>
      <div className="signup__content">
      <img  className="contact__content__illustration" src={picture} alt="" />
        <form action="" method="get" className="signup__content__form" onSubmit={handleSubmit}>
          {
            messageParams.isVisible
            && messageParams.componentToDisplayIn === 'SignUp'
            && (
              <Message {...messageParams} />
            )
          }
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
            validateInput={validateEmail}
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
            validateInput={testPasswordStrength}
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
            validateInput={comparePasswordConfirm}
          />
          <div className="signup__content__form__group">
            <button
              className="button--primary"
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
  validateEmail: Proptypes.func.isRequired,
  testPasswordStrength: Proptypes.func.isRequired,
};

SignUp.defaultProps = {
  loading: false,
};

export default SignUp;
