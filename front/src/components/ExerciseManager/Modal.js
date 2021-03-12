import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Modal = ({
  onConfirm: leave,
  removeExercise
}) => (
  <div className="modal" role="dialog" aria-modal="true" tabIndex="-1" aria-label="Conserver ou supprimer le brouillon">
    <h1>Souhaitez-vous conserver ce brouillon ?</h1>
    <button
      type="button"
      onClick={() => {
        leave();
      }}
    >
      Oui - j'y reviendrai plus tard
    </button>
    <button
      type="button"
      onClick={() => {
        leave();
        removeExercise();
      }}
    >
      Non - mettez-le à la poubelle
    </button>
  </div>
);

Modal.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  removeExercise: PropTypes.func.isRequired,
};

export default Modal;
