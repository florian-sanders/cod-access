import React from 'react';
import PropTypes from 'prop-types';
import picture from 'src/assets/img/contact-signup.svg';
import Message from 'src/containers/Message';
import CircleLoader from 'src/components/CircleLoader';
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
    <div className="signup wave-double-bottom">
      <img className="signup__illustration" src={picture} alt="" />
      <div className="signup__content">
        <h1 className="title-h1 signup__content__title">Inscription</h1>
        <form action="" method="get" className="signup__content__form" onSubmit={handleSubmit}>
          {
            messageParams.targetComponent === 'SignUp'
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
              className="button--primary signup__content__form__group__submit"
              type="submit"
            >
              <span>S'enregistrer</span>
              {
                loading && (
                  <CircleLoader
                    colour="#7ED8F7"
                    radius={8}
                    duration={2}
                    strokeWidth={3}
                  />
                )
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  email: PropTypes.shape({
    value: PropTypes.string.isRequired,
    controlMessage: PropTypes.string.isRequired,
  }).isRequired,
  pseudo: PropTypes.shape({
    value: PropTypes.string.isRequired,
    controlMessage: PropTypes.string.isRequired,
  }).isRequired,
  password: PropTypes.shape({
    value: PropTypes.string.isRequired,
    controlMessage: PropTypes.string.isRequired,
  }).isRequired,
  passwordConfirm: PropTypes.shape({
    value: PropTypes.string.isRequired,
    controlMessage: PropTypes.string.isRequired,
  }).isRequired,
  changeField: PropTypes.func.isRequired,
  trySignUp: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  isSignedUp: PropTypes.bool.isRequired,
  setControlMessage: PropTypes.func.isRequired,
  validateEmail: PropTypes.func.isRequired,
  testPasswordStrength: PropTypes.func.isRequired,
  messageParams: PropTypes.shape({
    targetComponent: PropTypes.string.isRequired,
  }).isRequired,
  comparePasswordConfirm: PropTypes.func.isRequired,
};

SignUp.defaultProps = {
  loading: false,
};

export default SignUp;
