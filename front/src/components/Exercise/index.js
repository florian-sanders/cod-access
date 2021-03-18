import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DOMPurify from 'dompurify';

import Question from 'src/containers/Exercise/Question';
import CircleLoader from '../CircleLoader'
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
    return (
      <div className="loading">
      <CircleLoader
        colour={"#7ED8F7"}
        radius={100}
        duration={2}
        strokeWidth={20} />
      </div>
      );
  }

  return (
    <section className="exercise-section">
      <h1 className="exercise-section__page-heading">{title}</h1>
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
        {
          currentQuestionIndex > 0 && (
            <button type="button" onClick={() => changeQuestion(currentQuestionIndex - 1)}>Question précédente</button>
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
      </section>
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
};

Exercise.defaultProps = {
  brief: '',
  questions: [],
  loading: true,
  currentQuestionIndex: 0,
};

export default Exercise;
