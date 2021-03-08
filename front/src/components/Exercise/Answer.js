import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import './styles.scss';

const Answer = ({
  answer: {
    id,
    content,
  },
  index,
  isDragDisabled,
  isUserAnswer,
  removeAnswer,
  questionId,
  userAnswers,
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
  answer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isDragDisabled: PropTypes.bool,
  isUserAnswer: PropTypes.bool,
  removeAnswer: PropTypes.func,
  questionId: PropTypes.number,
  userAnswers: PropTypes.array,
};

Answer.defaultProps = {
  isDragDisabled: false,
  isUserAnswer: false,
  removeAnswer: () => { },
  questionId: null,
  userAnswers: [],
};

export default Answer;
