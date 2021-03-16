import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Message = ({ type, message, closeMessage }) => {
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
      <button type="button" onClick={closeMessage}>x</button>
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
