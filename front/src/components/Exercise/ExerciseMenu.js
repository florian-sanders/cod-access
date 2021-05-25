import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CircleLoader from 'src/components/CircleLoader';

const ExerciseMenu = ({
  currentQuestionIndex,
  changeQuestion,
  resultsLoading,
  questions,
  isCorrected,
  submitAnswers,
}) => (
  <nav role="navigation" className="exercise-section__navigation" aria-label="questions">
    {
      currentQuestionIndex > 0 && (
        <button
          className="button button--secondary"
          type="button"
          onClick={() => changeQuestion(currentQuestionIndex - 1)}
          disabled={resultsLoading}
        >
          Question précédente
        </button>
      )
    }
    {
      currentQuestionIndex < questions.length - 1
      && (
        <button
          title={
            !questions[currentQuestionIndex].userAnswers.length
              ? 'Veuillez renseigner une réponse'
              : ''
          }
          disabled={!questions[currentQuestionIndex].userAnswers.length}
          className="exercise-section__navigation__submit button button--primary"
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
      !isCorrected
      && (currentQuestionIndex === questions.length - 1) && (
        <button
          title={
            !questions[currentQuestionIndex].userAnswers.length
              ? 'Veuillez renseigner une réponse'
              : ''
          }
          className="button button--primary"
          type="button"
          disabled={!questions[currentQuestionIndex].userAnswers.length || resultsLoading}
          onClick={submitAnswers}
        >
          {
            resultsLoading
              ? (
                <>
                  Calcul du score en cours
                  <CircleLoader
                    colour="#7ED8F7"
                    radius={8}
                    duration={2}
                    strokeWidth={3}
                  />
                </>
              )
              : 'Valider mes réponses'
          }
        </button>
      )
    }
    {
      isCorrected
      && (currentQuestionIndex === questions.length - 1) && (
        <Link to="/challenges" className="button button--primary">
          Retourner à la liste des challenges
        </Link>
      )
    }
  </nav>
);

ExerciseMenu.propTypes = {
  currentQuestionIndex: PropTypes.number.isRequired,
  changeQuestion: PropTypes.func.isRequired,
  submitAnswers: PropTypes.func.isRequired,
  resultsLoading: PropTypes.bool.isRequired,
  questions: PropTypes.array.isRequired,
  isCorrected: PropTypes.bool.isRequired,
};

export default ExerciseMenu;
