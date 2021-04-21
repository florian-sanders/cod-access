import React from 'react';
import { useParams } from 'react-router-dom';
import Proptypes from 'prop-types';

import Message from 'src/containers/Message';
import CircleLoader from 'src/components/CircleLoader';
import TextField from 'src/components/TextField';
import './styles.scss';

const PasswordReset = ({
  saveNewPassword,
  changeValue,
  password,
  passwordConfirm,
  setControlMessage,
  validatePassword,
  comparePasswordResetConfirm,
  loading,
  messageParams,
}) => {
  const { token } = useParams();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newToken = token.replace(/\$/g, '.');
    saveNewPassword(newToken);
  };

  return (
    <section className="passwordreset">
      <div className="container wave-double-bottom">
        <h1 className="title-h1 center">Nouveau mot de passe</h1>
        <form action="" method="get" className="passwordreset__form" onSubmit={handleSubmit}>
          {
            messageParams.targetComponent === 'PasswordReset'
            && (
              <Message {...messageParams} />
            )
          }
          <TextField
            id="password-reset-password"
            type="password"
            name="password"
            label="Saisissez votre nouveau mot de passe"
            value={password.value}
            message={password.controlMessage}
            changeValue={changeValue}
            placeholder="Veuillez renseigner votre nouveau mot de passe"
            isMandatory
            validateInput={validatePassword}
            setControlMessage={setControlMessage}
            inputClassName="full"
          />
          <TextField
            id="password-reset-password-confirm"
            type="password"
            name="passwordConfirm"
            label="Saisissez à nouveau votre mot de passe"
            value={passwordConfirm.value}
            message={passwordConfirm.controlMessage}
            changeValue={changeValue}
            placeholder="Veuillez confirmer votre nouveau mot de passe"
            isMandatory
            setControlMessage={setControlMessage}
            validateInput={comparePasswordResetConfirm}
            valueToCompare={password.value}
            inputClassName="full"
          />
          <button
            className="button button--primary passwordreset__form__submit"
            type="submit"
            disabled={messageParams.targetComponent === 'PasswordReset'}
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

PasswordReset.propTypes = {
  changeValue: Proptypes.func.isRequired,
  saveNewPassword: Proptypes.func.isRequired,
  password: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  passwordConfirm: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  loading: Proptypes.bool,
  setControlMessage: Proptypes.func.isRequired,
  validatePassword: Proptypes.func.isRequired,
  comparePasswordResetConfirm: Proptypes.func.isRequired,
  messageParams: Proptypes.shape({
    targetComponent: Proptypes.string.isRequired,
  }).isRequired,
};
PasswordReset.defaultProps = {
  loading: false,
};

export default PasswordReset;
