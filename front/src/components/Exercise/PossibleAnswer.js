import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import './styles.scss';

const PossibleAnswer = ({ answer: { content }, index, isDragDisabled, hasDeleteBtn, removeAnswer }) => (
  <Draggable draggableId={`${index}`} index={index} isDragDisabled={isDragDisabled}>
    {(provided, snapshot) => (
      <>
        <div
          className="exercise-section__question__answers__answer"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {content}
          {
            hasDeleteBtn && (
              <button type="button" onClick={() => removeAnswer(index)}>
                <span className="sr-only">Supprimer l'attribut {content}</span>
                x
              </button>
            )
          }
        </div>
        {snapshot.isDragging && (
          <div
            className="exercise-section__question__answers__answer"
          >
            {content}
          </div>
        )}
      </>
    )}
  </Draggable>
);

export default PossibleAnswer;
