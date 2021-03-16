import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ModalConfirm = ({
  heading,
  message,
  confirmParams,
  cancelParams,
  shouldDisplayHeading,
  closeModal,
}) => {
  const handleConfirm = () => {
    confirmParams.onConfirm();
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="modal" role="dialog" aria-modal="true" tabIndex="-1" aria-label={heading}>
      <button type="button" onClick={closeModal}>Fermer</button>
      {
        shouldDisplayHeading && (<h1>{heading}</h1>)
      }
      <p>{message}</p>
      <button
        type="button"
        onClick={handleConfirm}
      >
        {confirmParams.label}
      </button>

      <button
        type="button"
        onClick={handleCancel}
      >
        {cancelParams.label}
      </button>
    </div>
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
