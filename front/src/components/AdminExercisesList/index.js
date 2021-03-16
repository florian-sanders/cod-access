import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import Pagination from './Pagination';

import './styles.scss';

const AdminExercisesList = ({
  fetchExercises,
  totalPages,
  exercises,
  loadingExercisesList,
  deleteExercise,
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

  const handleOnClickDelete = (idExercise) => {
    deleteExercise(idExercise);
  };

  return (
    <>
      <div className="admin_users">
        <h1 className="title_h1">Liste des Challenges</h1>
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
                      onClick={() => {
                        handleOnClickDelete(exercise.id);
                      }}
                    >Supprimer
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
};

AdminExercisesList.defaultProps = {
  exercises: [],
  loadingExercisesList: false,
};

export default AdminExercisesList;
