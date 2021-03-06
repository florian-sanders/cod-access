import React from 'react';

import { useDrop } from 'react-dnd';

import PossibleAnswer from './PossibleAnswer';
import classNames from 'classnames';

import './styles.scss';

const Question = ({ question: { brief, code, explanation, picture, possibleAnswers } }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'answer',
    drop: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      code = item.content;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  console.log(drop);
  return (
    <article className="exercise-section__question">
      <p>Question 1</p>
      <p>{brief}</p>
      <img src={picture[0].path} alt="" />
      <pre>
        <code>
          &lt;p&gt;
            &lt;img src="toto.png" <span className={classNames('exercise-section__question__drop-area', { 'exercise-section__question__drop-area--hovered': canDrop && isOver })} ref={drop}>Drop me here</span> /&gt;
          &lt;/p&gt;
        </code>
      </pre>
      <article className="exercise-section__question__answers">
        {
          possibleAnswers.map((possibleAnswer) => (
            <PossibleAnswer answer={possibleAnswer} />
          ))
        }
      </article>
    </article >
  );
};

export default Question;
