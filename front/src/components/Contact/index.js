import React from 'react';
import Proptypes from 'prop-types';
import FieldGroup from './FieldGroup';
import picture from 'src/assets/img/contact-signup.svg';
import './styles.scss';

const Contact = ({
  changeField,
  name,
  emailContact,
  content,
  tryContact,
  loading,
  isContactDone,
  setControlMessage,
  validateEmail,
  validateLenght,
  validateContentLenght,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    tryContact();
  };
  return (
    <div className="contact">
      <h1 className="title-h1">Contactez-nous</h1>
      <div className="contact__content">
          <img  className="contact__content__illustration" src={picture} alt="" />
          <p>{isContactDone && 'Merci votre message a bien été envoyé : vous allez recevoir de confirmation.'}</p>
        <form action="" method="get" className="contact__content__form" onSubmit={handleSubmit}>
          <FieldGroup
            type="text"
            id="name"
            value={name.value}
            label="Nom / Prénom"
            name="name"
            onChange={changeField}
            isMandatory
            message={name.controlMessage}
            setControlMessage={setControlMessage}
            validateInput={validateLenght}
          />
          <FieldGroup
            type="email"
            id="emailContact"
            value={emailContact.value}
            label="Adresse e-mail (nom@domaine.fr)"
            name="emailContact"
            onChange={changeField}
            isMandatory
            message={emailContact.controlMessage}
            setControlMessage={setControlMessage}
            validateInput={validateEmail}
          />
          <FieldGroup
            type="textarea"
            id="content"
            value={content.value}
            label="Ecrivez votre message"
            name="content"
            onChange={changeField}
            isMandatory
            message={content.controlMessage}
            setControlMessage={setControlMessage}
            validateInput={validateContentLenght}
          />
          <div className="contact__content__form__group">
            <button
              className="button--primary"
              type="submit"
            >
              {loading ? 'chargement' : 'Envoyer'}
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
  emailContact: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  content: Proptypes.shape({
    value: Proptypes.string.isRequired,
    controlMessage: Proptypes.string.isRequired,
  }).isRequired,
  changeField: Proptypes.func.isRequired,
  tryContact: Proptypes.func.isRequired,
  loading: Proptypes.bool,
  isContactDone: Proptypes.bool.isRequired,
  setControlMessage: Proptypes.func.isRequired,
  validateEmail: Proptypes.func.isRequired,
  validateLenght: Proptypes.func.isRequired,
  validateContentLenght: Proptypes.func.isRequired,
};

Contact.defaultProps = {
  loading: false,
};

export default Contact;
