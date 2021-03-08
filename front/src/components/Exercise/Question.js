import React from 'react';
import PropTypes from 'prop-types';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';

import Answer from 'src/containers/Exercise/Answer';

import './styles.scss';

const Question = ({
  isHidden,
  id,
  brief,
  code,
  picture,
  possible_answers: possibleAnswers,
  userAnswers,
  newUserAnswer,
  questionIndex,
}) => {
  const handleDragEnd = (result) => {
    newUserAnswer({
      questionId: id,
      answerId: Number(result.draggableId),
      previousAnswers: userAnswers,
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <article className={
        classNames('exercise-section__questions__question', {
          'exercise-section__questions__question--hidden': isHidden,
        })
      }
      >
        <p>Question {questionIndex + 1}</p>
        {
          brief && (<p>{brief}</p>)
        }
        {
          picture && (<img src="toto.png" alt="" />)
        }
        <pre>
          <code>
            {code}
            <Droppable droppableId="user-answers">
              {(provided, snapshot) => (
                <span
                  className={
                    classNames(
                      'exercise-section__questions__question__drop-area',
                      {
                        'exercise-section__questions__question__drop-area--hovered': snapshot.isDraggingOver,
                      },
                    )
                  }
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  Drop me here
                  {provided.placeholder}
                  {
                    userAnswers.map((answerId, index) => (
                      <Answer
                        answer={possibleAnswers.find((answer) => (
                          answer.id === answerId
                        ))}
                        userAnswers={userAnswers}
                        isUserAnswer
                        questionId={id}
                        index={index}
                        isDragDisabled
                        key={answerId}
                      />
                    ))
                  }
                </span>
              )}
            </Droppable>
          </code>
        </pre>
        <Droppable droppableId="possible-answers" isDropDisabled>
          {(provided, snapshot) => (
            <article className="exercise-section__questions__question__answers" ref={provided.innerRef}>
              {
                possibleAnswers.map((possibleAnswer, index) => (
                  <Answer
                    answer={possibleAnswer}
                    index={index}
                    isDragDisabled={
                      userAnswers.includes(possibleAnswer.id)
                    }
                    key={possibleAnswer.id}
                  />
                ))
              }
              {provided.placeholder}
            </article>
          )}
        </Droppable>
      </article>
    </DragDropContext>
  );
};

Question.propTypes = {
  id: PropTypes.number.isRequired,
  brief: PropTypes.string,
  code: PropTypes.string.isRequired,
  picture: PropTypes.string,
  possible_answers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
  })).isRequired,
  userAnswers: PropTypes.array.isRequired,
  newUserAnswer: PropTypes.func.isRequired,
  questionIndex: PropTypes.number.isRequired,
};

Question.defaultProps = {
  brief: '',
  picture: '',
};

export default Question;
