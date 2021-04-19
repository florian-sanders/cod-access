import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

const ForgetPage = ({
  sendForEmail,
  onChangeText,
  email,
  isDone,
  loading,
  setControlMessage,
  validateEmail,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendForEmail();
  };
  const handleOnBlur = (valueToTest) => {
    if (!valueToTest) {
      setControlMessage({
        name: 'email',
        message: email.controlMessage,
        value: email.value,
      });
    }
    if (valueToTest) {
      validateEmail({
        message: email.controlMessage,
        value: email.value,
      });
    }
  };
  const button = isDone ? "hidden" : "button--primary"
  return (
    <section className="forget">
      <div className="container wave-double-bottom">
       <h1 className="title-h1 center">Mot de passe oublié</h1>
        <form action="" method="get" className="form-forget" onSubmit={handleSubmit}>
        <label className="form-label">
        Veuillez renseigner votre email pour recevoir le lien de réinitialisation.
        </label>
          <input
            className="form-input"
            value={email.value}
            onChange={(e) => {
              const text = e.target.value;
              onChangeText(text);
            }}
            placeholder="Veuillez renseigner votre e-mail"
            aria-required="true"
            onBlur={(evt) => handleOnBlur(evt.target.value)}
          />
          {
        email.controlMessage && (
          <p className="message--warning">{email.controlMessage}</p>
        )
      }
           {
          isDone
            && (
              <div role="alert" className="message-box confirm">
                <p className="messsage-box__content confirm__content">Merci, votre demande a été prise en compte, vous allez recevoir un lien de réinitialisation par email.</p>
              </div>
            )
        }
          <button className={button} type="submit">
            {loading ? 'chargement' : 'Valider'}
          </button>
        </form>
      </div>
    </section>
  );
};

ForgetPage.propTypes = {
  sendForEmail: Proptypes.func.isRequired,
  onChangeText: Proptypes.func.isRequired,
  email: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  isDone: Proptypes.bool.isRequired,
  loading: Proptypes.bool,
  setControlMessage: Proptypes.func.isRequired,
  validateEmail: Proptypes.func.isRequired,
};
ForgetPage.defaultProps = {
  loading: false,
};

export default ForgetPage;
