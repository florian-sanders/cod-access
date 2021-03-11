import React, { useEffect } from 'react';
import ModalRole from './ModalRole';
import PropTypes from 'prop-types';

import AdminMenu from 'src/components/AdminMenu';
import './styles.scss';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

const AdminUsersList = ({fetchUsers, users, loadingUsersList, deleteUser, usersRole, editUserRole, handleChangeSelect}) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loadingUsersList) {
    return (
      <p className="loader">Chargement</p>
    );
  }

  const handleOnClickDelete = (idUser) => {
    deleteUser(idUser);
  };

  const showModal = (idUser) => {
    deleteUser(idUser);
  };

  const handleSubmit = (idUser, event) => {
    event.preventDefault();
    editUserRole(idUser);
  };

  return (
    <>
      <AdminMenu />
      {/* <ModalRole /> */}
      <div className="admin_users">
        <h1 className="title_h1">Liste des utilisateurs</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>pseudo</th>
              <th>droit</th>
              <th>date de création</th>
              <th>dernière date de mise à jour</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.pseudo}</td>
                  <td>
                    {user.responsibility.entitled}
                    <form onSubmit={() => handleSubmit(user.id, event)}>
                      <select value={usersRole[user.id]} onChange={(event) => handleChangeSelect(user.id, event.target.value)}>
                        <option value="admin">Admin</option>
                        <option value="utilisateur">Utilisateur</option>
                      </select>
                      <button type="submit">Valider les modifications</button>
                    </form>
                  </td>
                  <td>{user.created_at}</td>
                  <td>{user.updated_at}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        handleOnClickDelete(user.id);
                      }}
                    >Supprimer
                    </button>
                    <button
                      type="button"
                      onClick={showModal}
                    >Modifier les droits
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    </>
  );
}

export default AdminUsersList;
