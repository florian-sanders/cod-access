import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import AdminMenu from 'src/components/AdminMenu';
import './styles.scss';

const AdminUsersList = ({fetchUsers, users, loadingUsersList, deleteUser, editUserRole}) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  const handleChange = (event) => {
    // event.preventDefault();
    // console.log(event.target.value);
  };

  return (
    <>
      <AdminMenu />
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
                    {user.responsibility_id}
                    <form onSubmit={handleSubmit}>
                      <select onChange={handleChange}>
                        <option value="2">Admin</option>
                        <option value="1">Utilisateur</option>
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
                      onClick={() => {
                        editUserRole(user.id);
                      }}
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
