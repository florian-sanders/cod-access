import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const NewPassword = ({
  validNewPassword, onChangeTextPass, password, passwordConfirm,
}) => {
  const { token } = useParams();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newToken = token.replace(/\$/g, '.');
    validNewPassword(newToken);
  };
  return (
    <>
      <div className="container">
        <p className="container__text">Vous êtes sur la page de réinitialisation de mot de passe. </p>
        <p className="container__text"> Veuillez saisir un nouveau mot de passe ainsi que la confirmation.</p>
        <form action="" method="get" className="form-new-password" onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              const textPassword = e.target.value;
              onChangeTextPass(textPassword, passwordConfirm);
            }}
            className="form-new-password__input-password"
            placeholder="Veuillez saisir un mot de passe"
          />
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => {
              const textPasswordConfirm = e.target.value;
              onChangeTextPass(password, textPasswordConfirm);
            }}
            className="form-new-password__input-password"
            placeholder="Veuillez confirmer le mot de passe"
          />
          <button className="form-new-password__btn-password" type="submit">Valider</button>
        </form>
      </div>
    </>
  );
};

NewPassword.propTypes = {
  validNewPassword: PropTypes.func.isRequired,
  onChangeTextPass: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
};

export default NewPassword;
