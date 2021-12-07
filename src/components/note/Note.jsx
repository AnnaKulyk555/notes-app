import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ModalContext } from '../../contexts/ModalContext';

import './note.scss';

const Note = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  const navigate = useNavigate();

  const deleteBtnHandler = () => {
    openModal({
      onModalSubmit: () => {
        console.log('delete');
        closeModal();
      },
      onModalCancel: () => {
        console.log('cancel');
        closeModal();
      },
    });
  };

  return (
    <>
      <li className="list-item">
        <div className="list-item__text">
          <span className="list-item__text-title">Title</span>
          <span className="list-item__text-desc">
            Description Description Description escription escription escription escription
            escription escription escription escription{' '}
          </span>
        </div>
        <div className="list-item__actions">
          <button className="list-item__action-btn btn" onClick={deleteBtnHandler}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className="list-item__action-btn btn" onClick={() => navigate('/editNote')}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      </li>
    </>
  );
};
export default Note;
