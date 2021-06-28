import React from 'react';
import PropTypes from 'prop-types';

import { FocusScope } from '@react-aria/focus';
import { Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';

import Answer from 'src/containers/Exercise/Answer';
import './styles.scss';

const DropAnswer = ({
  possibleAnswers,
  userAnswers,
  questionId,
}) => (
  <Droppable droppableId="user-answers">
    {(provided, snapshot) => (
      <FocusScope>
        <span
          className={
            classNames(
              'exercise-section__questions__question__code__drop-area',
              {
                'exercise-section__questions__question__code__drop-area--hovered': snapshot.isDraggingOver,
              },
            )
          }
          tabIndex="-1"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <span className="sr-only">Ajoutez vos réponses pour compléter ce code.</span>
          {provided.placeholder}
          {
            userAnswers.map((answerId, index) => (
              <Answer
                {...possibleAnswers.find((answer) => (
                  answer.id === answerId
                ))}
                userAnswers={userAnswers}
                isUserAnswer
                questionId={questionId}
                index={index}
                isDragDisabled
                key={`drop-${answerId}`}
              />
            ))
          }
        </span>
      </FocusScope>
    )}
  </Droppable>
);

DropAnswer.propTypes = {
  possibleAnswers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
  })).isRequired,
  userAnswers: PropTypes.array.isRequired,
  questionId: PropTypes.number.isRequired,
};

export default DropAnswer;
