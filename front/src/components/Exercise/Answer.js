import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';

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
  userCorrect,
  userAnswers,
  index,
  isDragDisabled,
  isUserAnswer,
  removeAnswer,
  questionId,
}) => {
  const handleClick = () => {
    removeAnswer({
      answerId: Number(id),
      questionId,
      previousAnswers: userAnswers,
    });
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
      shouldRespectForcePress
    >
      {(provided, snapshot) => (
        <>
          <div
            className={
              classNames(
                'exercise-section__questions__question__answers__answer',
                {
                  'exercise-section__questions__question__answers__answer--user-answer': isUserAnswer,
                  'exercise-section__questions__question__answers__answer--no-drag': isDragDisabled && !isUserAnswer,
                  'exercise-section__questions__question__answers__answer--user-correct': isUserAnswer && userCorrect,
                  'exercise-section__questions__question__answers__answer--user-incorrect': isUserAnswer && isCorrected && !userCorrect,
                  'exercise-section__questions__question__answers__answer--is-corrected': !isUserAnswer && isCorrected,
                  'exercise-section__questions__question__answers__answer--dropping': snapshot.isDragging && snapshot.isDropAnimating,
                  'exercise-section__questions__question__answers__answer--right-answer': isRightAnswer,
                },
              )
            }
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
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
                <button type="button" onClick={handleClick} className="exercise-section__questions__question__answers__answer__remove" aria-label={`Supprimer l'attribut ${content}`}>
                  <FontAwesomeIcon role="presentation" icon={faEraser} size="2x" />
                </button>
              )
            }
            {
              isCorrected
              && userCorrect
              && isUserAnswer
              && (
                <FontAwesomeIcon role="presentation" icon={faThumbsUp} size="2x" />
              )
            }
            {
              isUserAnswer
              && isCorrected
              && !userCorrect
              && (<FontAwesomeIcon role="presentation" icon={faThumbsDown} size="2x" />)
            }
            {
              isRightAnswer
              && !isUserAnswer
              && (<FontAwesomeIcon role="presentation" icon={faCheck} size="2x" />)
            }
          </div>
          {snapshot.isDragging && (
            <div
              className="exercise-section__questions__question__answers__answer"
            >
              {content}
            </div>
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
  userCorrect: PropTypes.bool,
  index: PropTypes.number.isRequired,
  isDragDisabled: PropTypes.bool,
  isUserAnswer: PropTypes.bool,
  removeAnswer: PropTypes.func.isRequired,
  questionId: PropTypes.number,
  userAnswers: PropTypes.array,
  isCorrected: PropTypes.bool,
};

Answer.defaultProps = {
  isDragDisabled: false,
  isUserAnswer: false,
  questionId: null,
  userAnswers: [],
  isCorrected: false,
  userCorrect: false,
  isRightAnswer: false,
};

export default Answer;
