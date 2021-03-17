import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const ExercisesList = ({ exercises, color }) => (
  <ul className="exercises__wrapper__block-list__theme__list">
    {exercises.map((exercise) => (
      <li className="exercises__wrapper__block-list__theme__list__exercise" key={exercise.id}>
        <span className="exercises__wrapper__block-list__theme__list__exercise__color" style={{ backgroundColor: color }} />
        <Link
          to={`/challenges/${exercise.id}`}
          className="exercises__wrapper__block-list__theme__list__exercise__link"
        >
          {exercise.title}
          {
          exercise.clients[0] && <span className="exercises__wrapper__block-list__theme__list__exercise__link__score">Mon meilleur score : {exercise.clients[0].Client_exercise.score}</span>
          }
        </Link>
      </li>
    ))}
  </ul>
);

ExercisesList.propTypes = {
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

ExercisesList.defaultProps = {
  exercises: [],
};

export default ExercisesList;
