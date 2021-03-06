import React from 'react';

import './styles.scss';

const PossibleAnswer = ({ answer: { content } }) => {
  return (
    <button type="button">{content}</button>
  );
};

export default PossibleAnswer;
