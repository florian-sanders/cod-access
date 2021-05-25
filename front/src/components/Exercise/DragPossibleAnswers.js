import React from 'react';
import PropTypes from 'prop-types';

import { Droppable } from 'react-beautiful-dnd';

import Answer from 'src/containers/Exercise/Answer';
import './styles.scss';

const DragPossibleAnswers = ({
  possibleAnswers,
  userAnswers,
  questionId,
}) => (
  <Droppable droppableId="possible-answers" isDropDisabled>
    {(provided, snapshot) => (
      <article className="exercise-section__questions__question__answers" ref={provided.innerRef}>
        {
          possibleAnswers.map((possibleAnswer, index) => (
            <Answer
              {...possibleAnswer}
              index={index}
              isDragDisabled={
                userAnswers.includes(possibleAnswer.id)
              }
              questionId={questionId}
              key={possibleAnswer.id}
            />
          ))
        }
        {provided.placeholder}
      </article>
    )}
  </Droppable>
);

DragPossibleAnswers.propTypes = {
  possibleAnswers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
  })).isRequired,
  userAnswers: PropTypes.array.isRequired,
  questionId: PropTypes.number.isRequired,
};

export default DragPossibleAnswers;
