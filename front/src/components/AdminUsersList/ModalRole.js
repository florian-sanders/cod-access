import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import { editUserRole } from '../../actions/users';
import users from '../../middlewares/users';

const ModalRole = ({idUser, role, handleChangeSelect}) => {
  const handleSubmit = (idUser, event) => {
    event.preventDefault();
    editUserRole(idUser);
  };
  return (
    <div className="modal">
      <p>Choisissez le droit pour l'utilisateur n°{idUser}</p>
      <form onSubmit={() => handleSubmit(idUser, event)}>
        <select value={role} onChange={(event) => handleChangeSelect(idUser, event.target.value)}>
          <option value="admin">Admin</option>
          <option value="utilisateur">Utilisateur</option>
        </select>
        <button type="submit">Valider les modifications</button>
        <button type="button">Annuler</button>
      </form>
    </div>
  )
}


export default ModalRole;
