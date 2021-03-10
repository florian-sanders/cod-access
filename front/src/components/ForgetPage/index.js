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
      <form action="" method="get" className="form-forget" onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => {
            const text = e.target.value;
            onChangeText(text);
          }}
          className="field-input"
          placeholder="Veuillez renseigner votre e-mail"
        />
      </form>
    </>
  );
};

ForgetPage.propTypes = {
  sendForEmail: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default ForgetPage;
