import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

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
  isCorrected,
}) => {
  useEffect(() => {
    getExercise();
  }, []);

  return (
    loading
      ? (<p> Chargement en cours</p>)
      : (
        <section className="exercise-section">
          <h1 className="exercise-section__page-heading">{title}</h1>
          <p className="exercise-section__brief">{brief}</p>
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
                > Question suivante
                </button>
              )
            }
            {
              !isCorrected && (currentQuestionIndex === questions.length - 1) && (
                <button
                  title={
                    !questions[currentQuestionIndex].userAnswers.length
                      ? 'Veuillez renseigner une réponse'
                      : ''
                  }
                  type="button"
                  disabled={!questions[currentQuestionIndex].userAnswers.length}
                  onClick={submitAnswers}
                >Valider mes réponses
                </button>
              )
            }
          </section>
        </section>
      )
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
};

Exercise.defaultProps = {
  brief: '',
  questions: [],
  loading: true,
  currentQuestionIndex: 0,
};

export default Exercise;
