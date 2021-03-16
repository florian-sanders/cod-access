import React from 'react';
import PropTypes from 'prop-types';

import { DragDropContext } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import DOMPurify from 'dompurify';

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
  const handleDragEnd = (result) => {
    newUserAnswer({
      questionId: id,
      answerId: Number(result.draggableId),
      previousAnswers: userAnswers,
    });
  };

  // move this to container / middleware later
  /*   const regex = /(?:\[\[|\]\])+/;
    const test = code.split(regex); */

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
          brief && (
            <article
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(brief),
              }}
            />
          )
        }
        {
          picture && (<img className="exercise-section__questions__question__img" src={`${process.env.IMAGE}${picture.path}`} alt={picture.alternative} />)
        }
        <pre>
          <code>
            {
              slicedCode.map((codeSlice) => {
                if (codeSlice === 'drop') {
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
                  <span key={nanoid()}>{codeSlice}</span>
                );
              })
            }

          </code>
        </pre>
        <DragPossibleAnswers
          possibleAnswers={possibleAnswers}
          userAnswers={userAnswers}
          questionId={id}
        />
        {
          explanation !== '' && (
            <article
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(explanation),
              }}
            />
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
