import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import DOMPurify from 'dompurify';

import sailorImgPath from 'src/assets/img/sailor.svg';
import Message from 'src/containers/Message';
import Question from 'src/containers/Exercise/Question';
import CircleLoader from 'src/components/CircleLoader';
import ExerciseMenu from 'src/containers/Exercise/ExerciseMenu';
import './styles.scss';

const Exercise = ({
  title,
  brief,
  questions,
  loading,
  currentQuestionIndex,
  getExercise,
  resetCurrentExercise,
  messageParams,
  closeMessage,
  isCorrected,
}) => {
  useEffect(() => {
    getExercise();

    document.title = 'Chargement du challenge -  Cod\'Access';
    return () => {
      resetCurrentExercise();
      closeMessage();
    };
  }, []);

  useEffect(() => {
    document.title = isCorrected
      ? `Corrigé -  ${title}`
      : `${title} -  Cod'Access`;
  }, [loading, isCorrected]);

  if (loading) {
    return (
      <div className="loading">
        <CircleLoader
          colour="#7ED8F7"
          radius={100}
          duration={2}
          strokeWidth={20}
        />
      </div>
    );
  }

  return (
    <div className="exercise-wrapper wave-double-bottom">
      <section className="exercise-section">
        <h1 className="title-h1">{title}</h1>
        <Link to="/challenges" className="exercise-section__quit">
          Quitter
          <FontAwesomeIcon className="exercise-section__quit__icon" role="presentation" icon={faSignOutAlt} size="1x" />
        </Link>
        {
          currentQuestionIndex === 0 && (
            messageParams.targetComponent === 'Exercise'
              ? (
                <Message {...messageParams} />
              )
              : (
                <div className="exercise-section__brief">
                  <img src={sailorImgPath} alt="" />
                  <article
                    className="exercise-section__brief__text rte-output"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(brief),
                    }}
                  />
                </div>
              )
          )
        }
        <section className="exercise-section__questions">
          {
            questions.map((question, index) => (
              <Question
                {...question}
                questionIndex={index}
                key={question.id}
              />
            ))
          }
        </section>
        <ExerciseMenu />
      </section>
    </div>
  );
};

Exercise.propTypes = {
  title: PropTypes.string.isRequired,
  brief: PropTypes.string,
  questions: PropTypes.array,
  loading: PropTypes.bool,
  currentQuestionIndex: PropTypes.number,
  getExercise: PropTypes.func.isRequired,
  resetCurrentExercise: PropTypes.func.isRequired,
  messageParams: PropTypes.shape({
    targetComponent: PropTypes.string.isRequired,
  }).isRequired,
  closeMessage: PropTypes.func.isRequired,
  isCorrected: PropTypes.bool.isRequired,
};

Exercise.defaultProps = {
  brief: '',
  questions: [],
  loading: true,
  currentQuestionIndex: 0,
};

export default Exercise;
