import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

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
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <>
          <div
            className="exercise-section__questions__question__answers__answer"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {content}
            {
              isUserAnswer && (
                <button type="button" onClick={handleClick}>
                  <span className="sr-only">Supprimer l'attribut {content}</span>
                  x
                </button>
              )
            }
            {
              isCorrected && userCorrect && (<p>Bravo champion</p>)
            }

            {
              isCorrected && isRightAnswer && (<p>C'était la bonne réponse !</p>)
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
