import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const ExercisesList = ({ exercises, color }) => (
  <ul className="exercises__wrapper__block-list__theme__list">
    {exercises.map((exercise) => (
      <li className="exercises__wrapper__block-list__theme__list__exercise" key={exercise.id}>
        <div className="exercises__wrapper__block-list__theme__list__exercise__color" style={{ backgroundColor: color }}>
          {
            exercise.clients[0] && <span className="exercises__wrapper__block-list__theme__list__exercise__color__score">{exercise.clients[0].Client_exercise.score}%</span>
          }
        </div>
        <Link
          to={`/challenges/${exercise.id}`}
          className="exercises__wrapper__block-list__theme__list__exercise__link"
        >
          <p className="exercises__wrapper__block-list__theme__list__exercise__link__text">{exercise.title}</p>
          {
            exercise.clients[0] && exercise.clients[0].Client_exercise.score === 100
              ? <FontAwesomeIcon icon={faTools} color={color} size="lg" className="exercises__wrapper__block-list__theme__list__exercise__link__icon--tools" />
              : <FontAwesomeIcon icon={faTools} size="lg" color="#E5EBED" className="exercises__wrapper__block-list__theme__list__exercise__link__icon--tools" />
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
  color: PropTypes.string.isRequired,
};

ExercisesList.defaultProps = {
  exercises: [],
};

export default ExercisesList;
