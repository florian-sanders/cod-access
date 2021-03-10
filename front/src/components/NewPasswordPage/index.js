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
    validNewPassword(token);
  };
  // useEffect(()=>{

  // }, []);

  return (
    <>
      <form action="" method="get" className="form-new-password" onSubmit={handleSubmit}>
        <input
          value={password}
          onChange={(e) => {
            const textPassword = e.target.value;
            onChangeTextPass(textPassword, passwordConfirm);
          }}
          className="input-password"
          placeholder="Veuillez entrer un mot de passe"
        />
        <input
          value={passwordConfirm}
          onChange={(e) => {
            const textPasswordConfirm = e.target.value;
            onChangeTextPass(password, textPasswordConfirm);
          }}
          className="input-password-confirm"
          placeholder="Veuillez confirmer le mot de passe"
        />
        <button type="submit">X</button>
      </form>
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
