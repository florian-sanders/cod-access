import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import DOMPurify from 'dompurify';

import Question from 'src/containers/Exercise/Question';
import './styles.scss';

const Exercise = ({
  title,
  brief,
  questions,
  loading,
  currentQuestionIndex,
  getExercise,
  changeQuestion,
  submitAnswers,
  resetCurrentExercise,
  userScore,
  resultMessage,
}) => {
  useEffect(() => {
    getExercise();
    return () => {
      resetCurrentExercise();
    };
  }, []);

  if (loading) {
    return (<p> Chargement en cours</p>);
  }

  return (
    <section className="exercise-section">
      <h1 className="title-h1">{title}</h1>
      <Link to="/challenges" className="exercise-section__quit">
        Quitter
        <FontAwesomeIcon className="exercise-section__quit__icon" role="presentation" icon={faSignOutAlt} size="1x" />
      </Link>
      {
        resultMessage && (
          <div className="exercise-section__results">
            <p>{resultMessage}</p>
          </div>
        )
      }
      <article
        className="exercise-section__brief"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(brief),
        }}
      />
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
      <nav role="navigation" className="exercise-section__navigation" aria-label="questions">
        {
          currentQuestionIndex > 0 && (
            <button
              className="button--secondary"
              type="button"
              onClick={() => changeQuestion(currentQuestionIndex - 1)}
            >
              Question précédente
            </button>
          )
        }
        {// move these tests to container later
          currentQuestionIndex < questions.length - 1
          && (
            <button
              title={
                !questions[currentQuestionIndex].userAnswers.length
                  ? 'Veuillez renseigner une réponse'
                  : ''
              }
              disabled={!questions[currentQuestionIndex].userAnswers.length}
              className="button--primary"
              type="button"
              onClick={
                () => changeQuestion(currentQuestionIndex + 1)
              }
            >
              Question suivante
            </button>
          )
        }
        {
          !userScore && (currentQuestionIndex === questions.length - 1) && (
            <button
              title={
                !questions[currentQuestionIndex].userAnswers.length
                  ? 'Veuillez renseigner une réponse'
                  : ''
              }
              className="button--primary"
              type="button"
              disabled={!questions[currentQuestionIndex].userAnswers.length}
              onClick={submitAnswers}
            >
              Valider mes réponses
            </button>
          )
        }
        {
          userScore && (currentQuestionIndex === questions.length - 1) && (
            <Link to="/challenges">
              Retourner à l'accueil
            </Link>
          )
        }
      </nav>
    </section>
  );
};

Exercise.propTypes = {
  title: PropTypes.string.isRequired,
  brief: PropTypes.string,
  questions: PropTypes.array,
  loading: PropTypes.bool,
  currentQuestionIndex: PropTypes.number,
  getExercise: PropTypes.func.isRequired,
  changeQuestion: PropTypes.func.isRequired,
  submitAnswers: PropTypes.func.isRequired,
  resetCurrentExercise: PropTypes.func.isRequired,
  resultMessage: PropTypes.string,
};

Exercise.defaultProps = {
  brief: '',
  questions: [],
  loading: true,
  currentQuestionIndex: 0,
  resultMessage: '',
};

export default Exercise;
