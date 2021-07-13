import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import issueImgPath from 'src/assets/img/issue.svg';
import fixedImgPath from 'src/assets/img/fixed.svg';

import './styles.scss';

const ExercisesList = ({ exercises }) => (
  <>
    {
      exercises.map((exercise) => (
        <div className="exercises__wrapper__block-list__exercise" key={exercise.id}>
          <Link
            to={`/challenges/${exercise.id}`}
            className="exercises__wrapper__block-list__exercise__link"
          >
            <p>{exercise.title}</p>
          </Link>
          {
            exercise.clients[0] && exercise.clients[0].Client_exercise.score === 100
              ? <img className="exercises__wrapper__block-list__exercise__img" src={fixedImgPath} alt="Statut : Réparé" width="150" />
              : <img className="exercises__wrapper__block-list__exercise__img" src={issueImgPath} alt="Statut : à réparer" width="150" />
          }
          {
            exercise.clients[0] && exercise.clients[0].Client_exercise.score && (
              <p className="exercises__wrapper__block-list__exercise__score">Score : {exercise.clients[0].Client_exercise.score}</p>
            )
          }
          <div className="exercises__wrapper__block-list__exercise__themes">
            <p>Thèmes :</p>
            <ul>
              {
                exercise.themes.map((theme) => (
                  <li
                    className="exercises__wrapper__block-list__exercise__themes__tag"
                    style={{ backgroundColor: theme.color }}
                  >
                    {theme.name}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      ))
    }
  </>
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
