import React from 'react';
import PropTypes from 'prop-types';

import { DragDropContext } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { nanoid } from 'nanoid';

import DropAnswer from './DropAnswer';
import DragPossibleAnswers from './DragPossibleAnswers';

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

  // move this to container / middleware later
  code = code.slice(0, 2) + '[[drop]]' + code.slice(2);
  const regex = /(?:\[\[|\]\])+/;
  const test = code.split(regex);

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
            {
              test.map((text) => {
                if (text === 'drop') {
                  return (
                    <DropAnswer
                      possibleAnswers={possibleAnswers}
                      userAnswers={userAnswers}
                      questionId={id}
                      key={nanoid()}
                    />
                  );
                }
                return (
                  <span key={nanoid()}>{text}</span>
                );
              })
            }

          </code>
        </pre>
        <DragPossibleAnswers
          possibleAnswers={possibleAnswers}
          userAnswers={userAnswers}
        />
      </article>
    </DragDropContext>
  );
};

Question.propTypes = {
  isHidden: PropTypes.bool.isRequired,
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
