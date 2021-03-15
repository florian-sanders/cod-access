import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const ForgetPage = ({ sendForEmail, onChangeText, email }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendForEmail();
  };

  return (
    <>
      <div className="container">
        <p className="container__text">
          Veuillez renseigner votre email pour recevoir le lien de réinitialisation.
        </p>
        <form action="" method="get" className="form-forget" onSubmit={handleSubmit}>
          <input
            className="form-forget__input-password"
            value={email}
            onChange={(e) => {
              const text = e.target.value;
              onChangeText(text);
            }}
            placeholder="Veuillez renseigner votre e-mail"
          />
          <button className="form-forget__btn-forget" type="submit">Valider</button>
        </form>
      </div>
    </>
  );
};

ForgetPage.propTypes = {
  sendForEmail: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default ForgetPage;
