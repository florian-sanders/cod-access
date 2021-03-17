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

  return (
    <>
      <div className="container">
        <p className="container__text">{isDone && 'Merci votre message a bien été envoyé : vous allez recevoir un lien de réinitialisation.'}</p>
        <p className="container__text">{!isDone
          && 'Veuillez renseigner votre email pour recevoir le lien de réinitialisation.'}
        </p>
        <form action="" method="get" className="form-forget" onSubmit={handleSubmit}>
          <input
            className="form-forget__input-password"
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
          <p>{email.controlMessage}</p>
        )
      }
          <button className="form-forget__btn-forget" type="submit">
            {loading ? 'chargement' : 'Valider'}
          </button>
        </form>
      </div>
    </>
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
