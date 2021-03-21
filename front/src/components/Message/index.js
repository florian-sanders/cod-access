import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Message = ({ type, message, closeMessage }) => {
  const messageContainer = useRef('');
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

  useEffect(() => {
    messageContainer.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  return (
    <div role="alert" className={`message-box ${classname}`} ref={messageContainer}>
      <p className={`message-box__content ${classname}__content`}>{message}</p>
      <button className={`message-box__cross ${classname}__cross`} type="button" onClick={closeMessage}>x</button>
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  closeMessage: PropTypes.func.isRequired,
};

export default Message;
