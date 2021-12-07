import React from 'react';

import './modal.scss';

const Modal = ({ onModalSubmit, onModalCancel }) => (
  <div className="overlay modal">
    <div className="modal__content">
      <span className="modal__content_text">Are you sure?</span>
      <div className="modal__content_actions">
        <button className="modal__content_actions-btn" onClick={onModalSubmit}>
          Yes
        </button>
        <button className="modal__content_actions-btn" onClick={onModalCancel}>
          No
        </button>
      </div>
    </div>
  </div>
);

export default Modal;
