import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { DragDropContext, useMouseSensor, useTouchSensor } from 'react-beautiful-dnd';
import classNames from 'classnames';
import DOMPurify from 'dompurify';

import sailorImgPath from 'src/assets/img/sailor.svg';
import DropAnswer from './DropAnswer';
import DragPossibleAnswers from './DragPossibleAnswers';

import './styles.scss';

const Question = ({
  isHidden,
  id,
  brief,
  slicedCode,
  picture,
  possibleAnswers,
  userAnswers,
  newUserAnswer,
  questionIndex,
  explanation,
}) => {
  const questionContainer = useRef('');
  const initialMount = useRef(true);

  useEffect(() => {
    if (!isHidden && !initialMount.current) {
      questionContainer.current.scrollIntoView({ behavior: 'smooth' });
    }

    if (initialMount.current) {
      initialMount.current = false;
    }
  }, [isHidden]);

  const handleDragEnd = (result) => {
    if (result.destination && result.destination.droppableId === 'user-answers') {
      newUserAnswer({
        questionId: id,
        answerId: Number(result.draggableId),
        previousAnswers: userAnswers,
      });
    }
  };

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
      enableDefaultSensors={false}
      sensors={[
        useMouseSensor,
        useTouchSensor,
      ]}
      dragHandleUsageInstructions="Utilisez la touche espace ou entrée pour sélectionner cette réponse."
    >
      <article
        className={
          classNames('exercise-section__questions__question', {
            'exercise-section__questions__question--hidden': isHidden,
          })
        }
        ref={questionContainer}
      >
        <h2 className="title-h2 exercise-section__questions__question__heading">Question {questionIndex + 1}</h2>
        {
          brief && (
            <article
              className="exercise-section__questions__question__brief rte-output"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(brief),
              }}
            />
          )
        }
        {
          picture && (<img className="exercise-section__questions__question__img" src={`${process.env.IMAGE}${picture.path}`} alt={picture.alternative} />)
        }
        <pre className="exercise-section__questions__question__code">
          <code>
            {
              slicedCode.map((codeSlice, index) => {
                if (codeSlice === 'drop') {
                  return (
                    <DropAnswer
                      possibleAnswers={possibleAnswers}
                      userAnswers={userAnswers}
                      questionId={id}
                      key={index}
                    />
                  );
                }
                return (
                  <span key={index}>{codeSlice}</span>
                );
              })
            }

          </code>
        </pre>
        <DragPossibleAnswers
          possibleAnswers={possibleAnswers}
          userAnswers={userAnswers}
          questionId={id}
          newUserAnswer={newUserAnswer}
        />
        {
          explanation !== '' && (
            <article className="exercise-section__questions__question__explanation">
              <h3 className="title-h3">Explications</h3>
              <div className="exercise-section__questions__question__explanation__content">
                <div
                  className="rte-output"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(explanation),
                  }}
                />
                <img src={sailorImgPath} alt="" />
              </div>

            </article>
          )
        }
      </article>
    </DragDropContext>
  );
};

Question.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  brief: PropTypes.string,
  slicedCode: PropTypes.array.isRequired,
  picture: PropTypes.shape({
    path: PropTypes.string,
    alternative: PropTypes.string,
  }),
  possibleAnswers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
  })).isRequired,
  userAnswers: PropTypes.array.isRequired,
  newUserAnswer: PropTypes.func.isRequired,
  questionIndex: PropTypes.number.isRequired,
  explanation: PropTypes.string,
};

Question.defaultProps = {
  brief: '',
  picture: {
    path: '',
    alternative: '',
  },
  explanation: '',
};

export default Question;
