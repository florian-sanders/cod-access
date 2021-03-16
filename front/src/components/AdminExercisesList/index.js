import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  useLocation,
} from 'react-router-dom';

import Message from 'src/containers/Message';
import Modal from 'src/containers/ModalConfirm';
import Pagination from './Pagination';

import './styles.scss';

const AdminExercisesList = ({
  fetchExercises,
  totalPages,
  exercises,
  loadingExercisesList,
  deleteExercise,
  displayModalConfirm,
  modalConfirmParams,
  displayMessage,
  messageParams,
}) => {
  const query = new URLSearchParams(useLocation().search);
  const page = Number(query.get('page')) || 1;

  useEffect(() => {
    fetchExercises({
      page,
    });
  }, [page, exercises.length]);

  if (loadingExercisesList) {
    return (
      <p className="loader">Chargement</p>
    );
  }

  const handleOnClickDelete = (exercise) => {
    displayModalConfirm({
      heading: 'Suppression exercice',
      message: `Souhaitez-vous réellement supprimer l'exercice "${exercise.title}"`,
      confirmParams: {
        onConfirm: () => {
          deleteExercise({
            exerciseId: exercise.id,
          });
        },
        params: {
          exerciseId: exercise.id,
        },
        label: 'Supprimer l\'exercice',
      },
      cancelParams: {
        onCancel: () => { },
        label: 'Annuler',
      },
      shouldDisplayHeading: true,
      isVisible: true,
    });
  };

  return (
    <>
      <div className="admin_users">
        <h1 className="title_h1">Liste des Challenges</h1>
        {
          messageParams.isVisible
          && messageParams.componentToDisplayIn === 'AdminExercisesList'
          && (
            <Message {...messageParams} />
          )
        }
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>titre</th>
              <th>thèmes</th>
              <th>Publié</th>
              <th>date de création</th>
              <th>dernière date de mise à jour</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {
              exercises.map((exercise) => (
                <tr key={exercise.id}>
                  <th>{exercise.id}</th>
                  <td>{exercise.title}</td>
                  <td>{exercise.themes.map((theme) => (
                    <p>{theme.name}</p>
                  ))}
                  </td>
                  <td>
                    {
                      exercise.published
                        ? 'Publié'
                        : 'Brouillon'
                    }
                  </td>
                  <td>{exercise.created_at}</td>
                  <td>{exercise.updated_at}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleOnClickDelete(exercise)}
                    >
                      Supprimer
                    </button>
                    <Link to={`/admin/exercices/edit/${exercise.id}`}>
                      Modifier
                    </Link>
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
      {
        modalConfirmParams.isVisible && (
          <Modal
            {...modalConfirmParams}
          />
        )
      }
    </>
  );
};

AdminExercisesList.propTypes = {
  fetchExercises: PropTypes.func.isRequired,
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string,
    }),
  ),
  totalPages: PropTypes.number.isRequired,
  loadingExercisesList: PropTypes.bool,
  deleteExercise: PropTypes.func.isRequired,
  displayModalConfirm: PropTypes.func.isRequired,
  modalConfirmParams: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    confirmParams: PropTypes.shape({
      onConfirm: PropTypes.func.isRequired,
      params: PropTypes.object,
      label: PropTypes.string.isRequired,
    }),
    cancelParams: PropTypes.shape({
      onCancel: PropTypes.func,
      label: PropTypes.string.isRequired,
    }),
    isVisible: PropTypes.bool.isRequired,
  }).isRequired,
  shouldDisplayHeading: PropTypes.bool,
  isVisible: PropTypes.bool,
  displayMessage: PropTypes.func.isRequired,
  messageParams: PropTypes.shape({
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
  }).isRequired,
};

AdminExercisesList.defaultProps = {
  exercises: [],
  loadingExercisesList: false,
  shouldDisplayHeading: true,
  isVisible: false,

};

export default AdminExercisesList;
