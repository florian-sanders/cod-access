import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FocusScope } from '@react-aria/focus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const ModalConfirm = ({
  heading,
  message,
  confirmParams,
  cancelParams,
  shouldDisplayHeading,
  closeModal,
}) => {
  const handleKeydown = (evt) => {
    if (evt.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleConfirm = () => {
    confirmParams.onConfirm();
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <FocusScope contain restoreFocus autoFocus>
      <div className="modal-confirm" role="dialog" aria-modal="true" tabIndex="-1" aria-label={heading}>
        <button className="button button--actions to--right" type="button" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>

        {
          shouldDisplayHeading && (<h1 className="modal-confirm__heading">{heading}</h1>)
        }
        <p className="modal-confirm__message">{message}</p>
        <div className="modal-confirm__buttons">
          <button
            type="button"
            className="button button--primary"
            onClick={handleConfirm}
          >
            {confirmParams.label}
          </button>

          <button
            type="button"
            className="button button--secondary"
            onClick={handleCancel}
          >
            {cancelParams.label}
          </button>
        </div>
      </div>
    </FocusScope>
  );
};

ModalConfirm.propTypes = {
  confirmParams: PropTypes.shape({
    onConfirm: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  cancelParams: PropTypes.shape({
    onCancel: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  heading: PropTypes.string.isRequired,
  shouldDisplayHeading: PropTypes.bool,
  message: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

ModalConfirm.defaultProps = {
  shouldDisplayHeading: false,
};

export default ModalConfirm;
