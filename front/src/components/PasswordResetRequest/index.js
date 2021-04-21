import React from 'react';
import Proptypes from 'prop-types';

import TextField from 'src/components/TextField';
import Message from 'src/components/Message';
import CircleLoader from 'src/components/CircleLoader';

import './styles.scss';

const PasswordResetRequest = ({
  sendResetPasswordEmail,
  changeValue,
  email,
  loading,
  setControlMessage,
  validateEmail,
  messageParams,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendResetPasswordEmail();
  };

  return (
    <section className="passwordreset">
      <div className="container wave-double-bottom">
        <h1 className="title-h1 center">Mot de passe oublié</h1>
        <form action="" method="get" className="passwordreset__form" onSubmit={handleSubmit}>
          {
            messageParams.targetComponent === 'PasswordResetRequest'
            && (
              <Message {...messageParams} />
            )
          }
          <TextField
            id="password-reset-email"
            type="text"
            name="email"
            label="Renseignez votre e-mail pour recevoir le lien de réinitialisation. (nom@domaine.fr)"
            value={email.value}
            message={email.controlMessage}
            changeValue={changeValue}
            placeholder="Veuillez renseigner votre e-mail"
            isMandatory
            validateInput={validateEmail}
            setControlMessage={setControlMessage}
            inputClassName="full"
          />
          <button
            className="button button--primary passwordreset__form__submit"
            type="submit"
            disabled={messageParams.targetComponent === 'PasswordResetRequest'}
          >
            <span>Envoyer la demande de réinitialisation</span>
            {
              loading && (
                <CircleLoader
                  colour="#FFFFFF"
                  radius={8}
                  duration={2}
                  strokeWidth={3}
                />
              )
            }
          </button>
        </form>
      </div>
    </section>
  );
};

PasswordResetRequest.propTypes = {
  sendResetPasswordEmail: Proptypes.func.isRequired,
  changeValue: Proptypes.func.isRequired,
  email: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  loading: Proptypes.bool,
  setControlMessage: Proptypes.func.isRequired,
  validateEmail: Proptypes.func.isRequired,
  messageParams: Proptypes.shape({
    targetComponent: Proptypes.string.isRequired,
  }).isRequired,
};
PasswordResetRequest.defaultProps = {
  loading: false,
};

export default PasswordResetRequest;
