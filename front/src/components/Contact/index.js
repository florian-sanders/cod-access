import React from 'react';
import Proptypes from 'prop-types';

import Message from 'src/containers/Message';
import CircleLoader from 'src/components/CircleLoader';
import TextField from 'src/components/TextField';
import picture from 'src/assets/img/contact-signup.svg';
import './styles.scss';

const Contact = ({
  changeValue,
  name,
  email,
  content,
  trySendContactMessage,
  loading,
  setControlMessage,
  validateEmail,
  validateNameLength,
  validateContentLength,
  messageParams,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    trySendContactMessage();
  };

  return (
    <div className="contact wave-double-bottom">
      <h1 className="title-h1 center">Contactez-nous</h1>
      <div className="contact__content">
        <img className="contact__content__illustration" src={picture} alt="" />
        <form action="" method="get" className="contact__content__form" onSubmit={handleSubmit}>
          {
            messageParams.targetComponent === 'Contact'
            && (
              <Message {...messageParams} />
            )
          }
          <TextField
            type="text"
            id="name"
            value={name.value}
            label="Nom / Prénom"
            name="name"
            changeValue={changeValue}
            isMandatory
            message={name.controlMessage}
            setControlMessage={setControlMessage}
            validateInput={validateNameLength}
            inputClassName="full"
          />
          <TextField
            type="email"
            id="emailContact"
            value={email.value}
            label="Adresse e-mail (nom@domaine.fr)"
            name="email"
            changeValue={changeValue}
            isMandatory
            message={email.controlMessage}
            setControlMessage={setControlMessage}
            validateInput={validateEmail}
            inputClassName="full"
          />
          <TextField
            type="textarea"
            id="content"
            value={content.value}
            label="Ecrivez votre message"
            name="content"
            changeValue={changeValue}
            isMandatory
            message={content.controlMessage}
            setControlMessage={setControlMessage}
            validateInput={validateContentLength}
            inputClassName="full"
          />
          <div className="contact__content__form__group">
            <button
              className="button button--primary"
              type="submit"
              disabled={messageParams.targetComponent === 'Contact'}
            >
              <span>Envoyer le message</span>
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
          </div>
        </form>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  email: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  content: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  messageParams: Proptypes.shape({
    targetComponent: Proptypes.string.isRequired,
  }).isRequired,
  changeValue: Proptypes.func.isRequired,
  trySendContactMessage: Proptypes.func.isRequired,
  loading: Proptypes.bool,
  setControlMessage: Proptypes.func.isRequired,
  validateEmail: Proptypes.func.isRequired,
  validateNameLength: Proptypes.func.isRequired,
  validateContentLength: Proptypes.func.isRequired,
};

Contact.defaultProps = {
  loading: false,
};

export default Contact;
