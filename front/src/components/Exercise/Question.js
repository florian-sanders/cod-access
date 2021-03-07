import React, { useState } from 'react';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import PossibleAnswer from './PossibleAnswer';

import './styles.scss';

const Question = ({ question: { brief, code, explanation, picture, possibleAnswers } }) => {
  const [state, setState] = useState({
    questionId: 1,
    userAnswers: [],
  });

  const newUserAnswer = (result) => {
    console.log(result.draggableId);
    setState({
      ...state,
      userAnswers: [
        ...state.userAnswers,
        result.draggableId,
      ],
    });
  };

  const removeAnswer = (answerIndex) => {
    console.log(answerIndex);
    setState({
      ...state,
      userAnswers: [
        ...state.userAnswers.filter((i) => i !== answerIndex.toString()),
      ],
    });
  }

  return (
    <DragDropContext onDragEnd={newUserAnswer}>
      <article className="exercise-section__question">
        <p>Question 1</p>
        <p>{brief}</p>
        <img src={picture[0].path} alt="" />
        <pre>
          <code>
            &lt;p&gt;
            &lt;img src="toto.png"
            <Droppable droppableId="user-answers">
              {(provided, snapshot) => (
                <span
                  className={
                    snapshot.isDraggingOver
                      ? 'exercise-section__question__drop-area--hovered'
                      : 'exercise-section__question__drop-area'
                  }
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  Drop me here
                  {provided.placeholder}
                  {console.log(state)}
                  {
                    state.userAnswers.map((i) => (
                      <PossibleAnswer answer={possibleAnswers[i]} index={0} isDragDisabled hasDeleteBtn removeAnswer={removeAnswer}/>
                    ))
                  }
                </span>
              )}
            </Droppable>
            /&gt;
          &lt;/p&gt;
        </code>
        </pre>
        <Droppable droppableId="possible-answers" isDropDisabled>
          {(provided, snapshot) => (
            <article className="exercise-section__question__answers" ref={provided.innerRef}>
              {
                possibleAnswers.map((possibleAnswer, index) => {
                  console.log(possibleAnswer,);
                  return (
                    <PossibleAnswer
                      answer={possibleAnswer}
                      index={index}
                      isDragDisabled={
                        state.userAnswers.includes(index.toString())
                      }
                    />
                  )
                })
              }
              {provided.placeholder}
            </article>
          )}
        </Droppable>
      </article>
    </DragDropContext>
  );
};

export default Question;
