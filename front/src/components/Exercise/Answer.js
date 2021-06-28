import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { useFocusManager } from '@react-aria/focus';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGripLines, faEraser, faCheck, faThumbsUp, faThumbsDown,
} from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const Answer = ({
  id,
  content,
  isCorrected,
  isRightAnswer,
  isUserCorrect,
  userAnswers,
  index,
  isDragDisabled,
  isUserAnswer,
  removeAnswer,
  questionId,
  newUserAnswer,
}) => {
  const focusManager = useFocusManager();
  const userAnswerRef = useRef(null);
  useEffect(() => {
    if (isUserAnswer) {
      userAnswerRef.current.focus();
    }
  }, []);

  const handleClick = () => {
    removeAnswer({
      answerId: Number(id),
      questionId,
      previousAnswers: userAnswers,
    });
    focusManager.focusPrevious({ wrap: true });
  };

  const handleDoubleClick = () => {
    newUserAnswer({
      questionId,
      answerId: Number(id),
      previousAnswers: userAnswers,
    });
  };

  const handleKeyDown = (evt) => {
    if (evt.code === 'Space' || evt.code === 'Enter') {
      newUserAnswer({
        questionId,
        answerId: Number(id),
        previousAnswers: userAnswers,
      });
    }
  };

  return (
    <Draggable
      draggableId={
        isUserAnswer
          ? `user-answer-${id}`
          : id.toString()
      }
      index={index}
      isDragDisabled={isDragDisabled || isCorrected}
    >
      {(provided, snapshot) => (
        <>
          <span
            className={
              classNames(
                'exercise-section__questions__question__answers__answer',
                {
                  'exercise-section__questions__question__answers__answer--user-answer': isUserAnswer,
                  'exercise-section__questions__question__answers__answer--no-drag': isDragDisabled && !isUserAnswer,
                  'exercise-section__questions__question__answers__answer--user-correct': isUserAnswer && isCorrected && isUserCorrect,
                  'exercise-section__questions__question__answers__answer--user-incorrect': isUserAnswer && isCorrected && !isUserCorrect,
                  'exercise-section__questions__question__answers__answer--is-corrected': !isUserAnswer && isCorrected,
                  'exercise-section__questions__question__answers__answer--dropping': snapshot.isDragging && snapshot.isDropAnimating,
                  'exercise-section__questions__question__answers__answer--right-answer': isRightAnswer,
                  'exercise-section__questions_question__answers__answer--isNotDragging': !snapshot.isDragging,
                },
              )
            }
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onDoubleClick={handleDoubleClick}
            onKeyDown={handleKeyDown}
          >
            {
              !isCorrected
              && !isUserAnswer
              && !isDragDisabled
              && (
                <FontAwesomeIcon className="exercise-section__questions__question__answers__answer__icon" role="presentation" icon={faGripLines} size="2x" />
              )
            }
            {content}
            {
              isUserAnswer
              && !isCorrected
              && (
                <button type="button" onClick={handleClick} className="exercise-section__questions__question__answers__answer__remove" aria-label={`Supprimer la réponse ${content}`} ref={userAnswerRef}>
                  <FontAwesomeIcon role="presentation" icon={faEraser} size="2x" />
                </button>
              )
            }
            {
              isCorrected
              && isUserCorrect
              && isUserAnswer
              && (
                <FontAwesomeIcon role="presentation" icon={faThumbsUp} size="2x" />
              )
            }
            {
              isUserAnswer
              && isCorrected
              && !isUserCorrect
              && (<FontAwesomeIcon role="presentation" icon={faThumbsDown} size="2x" />)
            }
            {
              isRightAnswer
              && !isUserAnswer
              && (<FontAwesomeIcon role="presentation" icon={faCheck} size="2x" />)
            }
          </span>
          {snapshot.isDragging && (
            <span
              className="exercise-section__questions__question__answers__answer"
            >
              {content}
            </span>
          )}
        </>
      )}
    </Draggable>
  );
};

Answer.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  isRightAnswer: PropTypes.bool,
  isUserCorrect: PropTypes.bool,
  index: PropTypes.number.isRequired,
  isDragDisabled: PropTypes.bool,
  isUserAnswer: PropTypes.bool,
  removeAnswer: PropTypes.func.isRequired,
  questionId: PropTypes.number,
  userAnswers: PropTypes.array,
  isCorrected: PropTypes.bool,
  newUserAnswer: PropTypes.func,
};

Answer.defaultProps = {
  isDragDisabled: false,
  isUserAnswer: false,
  questionId: null,
  userAnswers: [],
  isCorrected: false,
  isUserCorrect: false,
  isRightAnswer: false,
  newUserAnswer: () => {},
};

export default Answer;
