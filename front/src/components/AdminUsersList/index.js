import React, { useEffect } from 'react';
// import ModalRole from './ModalRole';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import ModalConfirm from 'src/containers/ModalConfirm';
import Message from 'src/containers/Message';
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
  displayModalConfirm,
  modalConfirmParams,
  displayMessage,
  messageParams,
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

  const handleOnClickDelete = (user) => {
    displayModalConfirm({
      heading: 'Suppression utilisateur',
      message: `Souhaitez-vous réellement supprimer l'utilisateur "${user.email}"`,
      confirmParams: {
        onConfirm: () => {
          deleteUser({
            userId: user.id,
          });
        },
        params: {
          userId: user.id,
        },
        label: 'Supprimer l\'utilisateur',
      },
      cancelParams: {
        onCancel: () => { },
        label: 'Annuler',
      },
      shouldDisplayHeading: true,
      isVisible: true,
    });
  };

  const handleSubmit = (idUser, event) => {
    event.preventDefault();
    editUserRole(idUser);
  };

  return (
    <>
      <div className="admin__users">
        <h1 className="title-h2">Liste des utilisateurs</h1>
        {
          messageParams.isVisible
          && messageParams.componentToDisplayIn === 'AdminUsersList'
          && (
            <Message {...messageParams} />
          )
        }
        <table className="admin__users__table">
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
                    {/* {user.responsibility.entitled} */}
                    <form class="form-responsibility" onSubmit={() => handleSubmit(user.id, event)}>
                      <select
                       className="form-responsibility__select"
                        value={usersRole[user.id]}
                        onChange={(event) => handleChangeSelect(user.id, event.target.value)}
                      >
                        <option className="option" value="admin">Admin</option>
                        <option className="option" value="utilisateur">Utilisateur</option>
                      </select>
                      {/* <button className="button--actions" type="submit">
                      <FontAwesomeIcon icon={faCheckCircle} />
                        </button> */}
                              <button
                     className="button--actions valid"
                     type="button"
                     onClick={() => {
                      handleSubmit(user.id, event);
                    }}
                  >
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </button>
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
                      className="button--actions"
                      type="button"
                      onClick={() => {
                        handleOnClickDelete(user);
                      }}
                    >
                     <FontAwesomeIcon icon={faTrash}  className=" trash" />
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
        {
          modalConfirmParams.isVisible && (
            <ModalConfirm
              {...modalConfirmParams}
            />
          )
        }
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
