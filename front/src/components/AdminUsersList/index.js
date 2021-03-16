import React, { useEffect } from 'react';
// import ModalRole from './ModalRole';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Pagination from './Pagination';

import './styles.scss';

const AdminUsersList = ({
  fetchUsers,
  users,
  loadingUsersList,
  deleteUser,
  usersRole,
  editUserRole,
  handleChangeSelect,
  totalPages,
}) => {
  const query = new URLSearchParams(useLocation().search);
  const page = Number(query.get('page')) || 1;

  useEffect(() => {
    fetchUsers(page);
  }, [page, users.length]);

  if (loadingUsersList) {
    return (
      <p className="loader">Chargement</p>
    );
  }

  const handleOnClickDelete = (idUser) => {
    deleteUser(idUser);
  };

  const handleSubmit = (idUser, event) => {
    event.preventDefault();
    editUserRole(idUser);
  };

  return (
    <>
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
                      <select
                        value={usersRole[user.id]}
                        onChange={(event) => handleChangeSelect(user.id, event.target.value)}
                      >
                        <option value="admin">Admin</option>
                        <option value="utilisateur">Utilisateur</option>
                      </select>
                      <button type="submit">Valider les modifications</button>
                    </form>
                    {/* <ModalRole
                      handleChangeSelect={handleChangeSelect}
                      idUser={user.id}
                      role={usersRole[user.id]}
                      isVisible={modalVisible}
                    /> */}
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
                      // onClick={}
                    >Modifier les droits
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Pagination
          totalPages={totalPages}
          activePage={page}
        />
      </div>
    </>
  );
};

AdminUsersList.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      pseudo: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string,
      responsibility: PropTypes.shape({
        entitled: PropTypes.string.isRequired,
      }),
    }),
  ),
  loadingUsersList: PropTypes.bool,
  deleteUser: PropTypes.func.isRequired,
  usersRole: PropTypes.object,
  editUserRole: PropTypes.func.isRequired,
  handleChangeSelect: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

AdminUsersList.defaultProps = {
  users: [],
  loadingUsersList: false,
  usersRole: {},
};

export default AdminUsersList;
