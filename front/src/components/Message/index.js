import React from 'react';

import './styles.scss';

const Message = ({ type, message }) => {
  let classname = '';
  switch (type) {
    case 'confirm':
      classname = 'confirm';
      break;
    case 'error':
      classname = 'error';
      break;
    default:
      classname = 'neutral';
  }

  return (
    <div role="alert" className={`message-box ${classname}`}>
      <p>{message}</p>
    </div>
  );
};

export default Message;
