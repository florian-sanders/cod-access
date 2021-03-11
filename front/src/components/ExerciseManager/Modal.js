import React from 'react';
import classNames from 'classnames';

import './styles.scss';

const Modal = ({ isVisible }) => (
  <div className="modal">
    <h1>Souhaitez-vous conserver ce brouillon ?</h1>
    <button type="button">Oui</button>
    <button type="button">Non</button>
  </div>
);

export default Modal;
